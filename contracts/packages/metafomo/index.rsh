'reach 0.1'
'use strict';

// ======
// COMMON
// ======
const maxDiscountLevel = 5;
const maxTimeReductionLevel = 5;

const Info = Struct([
    ["deadline", UInt],
    ["deltaDeadline", UInt],
    ["nftPrize", Token],

    ["tokenOwnedByUsers", UInt],
    ["token", Token],

    ["currentPrice", UInt],
    ["currentTotal", UInt],
    ["currentWinner", Address],
    ["paidToFunder", UInt],

    ["endTimestamp", UInt],

    ["discountPrices", Array(UInt, maxDiscountLevel)],
    ["discountPercents", Array(UInt, maxDiscountLevel + 1)],
    ["timeReductionPrices", Array(UInt, maxTimeReductionLevel)],
    ["timeReductionSecs", Array(UInt, maxTimeReductionLevel + 1)],
]);

const ParticipantStats = Struct([
  ["discountLevel", UInt],
  ["timeReductionLevel", UInt],
  ["addr", Address],
]);

const Common = {
  // Show the address of winner
  showOutcome: Fun([Address], Null),
  // For test purposes.
  deployed: Fun([], Null),
};

// TODO
// * consider counting personal contribution
// * FIXME IMPORTANT! RW0006

export const main = Reach.App(() => {
    // ============
    // PARTICIPANTS
    // ============
    const Funder = Participant('Funder', {
      ...Common,
      getParams: Fun([], Object({
        // Relative deadline (how long timer will tick after the beginning/refresh).
        deadline: UInt,
        // Time to add after each buy
        deltaDeadline: UInt,
        // Initial price of tickets.
        ticketPrice: UInt,
        // An NFT which will serve as additional prize to the winner.
        nftPrize: Token,
        // Affects how the ticket price changes as tickets are sold (0 means constant price).
        // TODO: consider something more interesting?
        unitPrice: UInt,
        // Funder gets part of ticket sales. This number represents denominator. Examples:
        // * ticketFeeDenominator = 2 means Funder will get 50% of sales
        // * ticketFeeDenominator = 100 means Funder will get 1% of sales
        ticketFeeDenominator: UInt,
        // Amount of METAFOMO token given for a bet.
        tokensGivenPerTicket: UInt
      })),
    });

    const Buyer = ParticipantClass('Buyer', {
      ...Common,
      // [address of winner, last price, new price without discount]
      showPurchase: Fun([Address, UInt, UInt], Null),
      updateDiscountLevel: Fun([Address, UInt], Null),
      updateTimeReductionLevel: Fun([Address, UInt], Null),
    });

    // =====
    // VIEWS
    // =====
    // TODO return one object cause otherwise it is slower/inconvenient
    const Fomo = View('Fomo', {
      info: Info,
      nextPrice: Fun([UInt], UInt),
      prevPrice: Fun([UInt], UInt),
    })

    // ===
    // API
    // ===
    const Api = API('Api', {
      buyTicket: Fun([], ParticipantStats),
      buyDiscount: Fun([], ParticipantStats),
      buyTimeReduction: Fun([], ParticipantStats),

      getParticipantStats: Fun([], ParticipantStats),
    })

    // =======
    // HELPERS
    // =======
    const showOutcome = (who) =>
      each([Funder, Buyer], () => {
        interact.showOutcome(who); });

    const getNewPrice = (price, unitPrice) =>
        price + unitPrice;

    const getOldPrice = (price, unitPrice) =>
        price - unitPrice;

    forall(UInt, price =>
      forall(UInt, unitPrice =>
        assert(getOldPrice(getNewPrice(price, unitPrice), unitPrice) == price)));

    // =====
    // INIT
    // =====

    setOptions({
      untrustworthyMaps: true
    });

    init();
        
    // Funder sets initial parameters.
    Funder.only(() => {
      const { ticketPrice, nftPrize, deadline, deltaDeadline, unitPrice, ticketFeeDenominator, tokensGivenPerTicket } =
        declassify(interact.getParams());
      check(ticketFeeDenominator > 1);
    });
    Funder.publish(ticketPrice, nftPrize, deadline, deltaDeadline, unitPrice, ticketFeeDenominator, tokensGivenPerTicket);

    const tokenParams = {
      name: Bytes(32).pad("Metafomo"),
      symbol: Bytes(8).pad("METAFOMO"),
      url: Bytes(96).pad("https://metalabs.technology"),
      metadata: Bytes(32).pad(""),
      supply: UInt.max
    };
    const fomoToken = new Token(tokenParams);
    // Commit here due to two reasons:
    // 1. We need to "construct" the contract before sending tokens to it.
    // 2. A particular Token address need to be committed before sending it.

    // TODO checkBoundary
    // ========
    // DISCOUNT
    // =======

    const discountPercents = array(UInt, [0, 5, 10, 15, 20, 25]);
    // In FOMO token. TODO: add additional ALGO fee?
    const discountPrices = array(UInt, [10, 20, 40, 80, 160]);

    check(discountPrices.size() == maxDiscountLevel);
    check(discountPercents.size() == maxDiscountLevel + 1);

    const discountM = new Map(UInt);

    const getDiscountLevel = (who) => fromSome(discountM[who], 0)

    const getDiscountPrice = (who) => {
      const level = getDiscountLevel(who);
      check(level < maxDiscountLevel);
      // TODO check if need to multiply by 1eDECIMALS
      if (level >= maxDiscountLevel) {
        return 1e9; // should never happen. Only for verifier. TODO check if we can do better
      } else {
        return discountPrices[level];
      };
    }
    const getDiscountPercent = (who) => {
      const level = getDiscountLevel(who);
      // TODO check if need to multiply by 1eDECIMALS
      if (level >= maxDiscountLevel) {
        return 0; // should never happen. Only for verifier.
      } else {
        return discountPercents[level];
      };
    }

    const getPriceWithDiscount = (who, price) => {
      const d = getDiscountPercent(who);
      check(d < 100);
      return price * (1-d/100);
    }

    // ==============
    // TIME REDUCTION
    // ==============

    // Levels of time reduction
    const timeReductionSecs = array(UInt, [0, 1, 2, 3, 4, 5]);
    const timeReductionPrices = array(UInt, [10, 20, 40, 80, 160]);

    check(timeReductionPrices.size() == maxTimeReductionLevel);
    check(timeReductionSecs.size() == maxTimeReductionLevel + 1);

    const timeReductionM = new Map(UInt);

    const getTimeReductionLevel = (who) => fromSome(timeReductionM[who], 0);

    const getTimeReductionPrice = (who) => {
      const level = getTimeReductionLevel(who);
      check(level < maxTimeReductionLevel);
      // TODO check if need to multiply by 1eDECIMALS
      if (level >= maxTimeReductionLevel) {
        return 1e9; // should never happen. Only for verifier. TODO check if we can do better
      } else {
        return timeReductionPrices[level];
      };
    }
    const getTimeReductionSecs = (who) => {
      const level = getTimeReductionLevel(who);
      // TODO check if need to multiply by 1eDECIMALS
      if (level >= maxTimeReductionLevel) {
        return 0; // should never happen. Only for verifier. TODO check if we can do better
      } else {
        return timeReductionSecs[level];
      };
    }
    // ====
    // MAIN
    // ====
    
    const getParticipantStats = (p) => ParticipantStats.fromObject({
      addr: p,
      discountLevel: getDiscountLevel(p),
      timeReductionLevel: getTimeReductionLevel(p),
    });

    commit();

    Funder.pay([[1, nftPrize]]);
    
    // For test purposes
    each([Buyer, Funder], () => {
      interact.deployed();
    });

    // Until timeout, allow buyers to buy ticket
    const [
      keepGoing,
      winner,
      ticketsSold,
      totalRaised,
      price,
      paidToFunder,
      currentDeadline
    ] = parallelReduce([ true, Funder, 0, 0, ticketPrice, 0, lastConsensusSecs() + deadline ])
        .define(() => {
          // always set constant values here to avoid possible REP0001
          Fomo.info.set(Info.fromObject({
            deadline,
            deltaDeadline,
            nftPrize,
            tokenOwnedByUsers: fomoToken.supply() - balance(fomoToken),
            token: fomoToken,

            currentPrice: price,
            currentWinner: winner,
            currentTotal: totalRaised,
            paidToFunder,

            endTimestamp: currentDeadline,

            discountPrices,
            discountPercents,
            timeReductionPrices,
            timeReductionSecs,
          }));

          Fomo.nextPrice.set((p) => getNewPrice(p, unitPrice));
          Fomo.prevPrice.set((p) => getOldPrice(p, unitPrice));
        })
        .invariant(balance() == totalRaised - paidToFunder && balance(nftPrize) == 1 &&
          fomoToken.destroyed() == false && fomoToken.supply() == UInt.max)
        .while(keepGoing)
        .paySpec([fomoToken])
        .api(
          Api.buyTicket,
          () => {
            assume(ticketFeeDenominator > 1);
            assume(balance(fomoToken) > tokensGivenPerTicket);
          },
          () => [getPriceWithDiscount(this, price), [0, fomoToken]],
          (callback) => {
            require(ticketFeeDenominator > 1);
            require(balance(fomoToken) > tokensGivenPerTicket);

            const funderFee = price / ticketFeeDenominator;
            const buyer = this;
            const newPriceWithoutDiscount = getNewPrice(price, unitPrice);
            Buyer.only(() => interact.showPurchase(buyer, price, newPriceWithoutDiscount));
            transfer(funderFee).to(Funder);
            transfer([[tokensGivenPerTicket, fomoToken]]).to(buyer);

            const reducedDelta = deltaDeadline - getTimeReductionSecs(this);

            const participantStats = getParticipantStats(this);
            callback(participantStats);
            return [ true,
              buyer,
              ticketsSold + 1,
              totalRaised + getPriceWithDiscount(this, price),
              newPriceWithoutDiscount,
              paidToFunder + funderFee,
              currentDeadline + reducedDelta
            ];
          }
        )
        .api(
          Api.buyDiscount,
          () => assume(getDiscountLevel(this) < maxDiscountLevel),
          () => [0, [getDiscountPrice(this), fomoToken]],
          (callback) => {
            const discountLevel = getDiscountLevel(this);
            require(discountLevel < maxDiscountLevel);

            //const spent = discountPrices[getDiscountLevel(this)];

            discountM[this] = discountLevel + 1;

            Buyer.only(() => {
              // if (didPublish()) {
                interact.updateDiscountLevel(this, discountLevel + 1);
              // }
            });
            
            const participantStats = getParticipantStats(this);
            callback(participantStats);
            return [ true, winner, ticketsSold, totalRaised, price, paidToFunder, currentDeadline ];
          }
        )
        .api(
          Api.buyTimeReduction,
          () => assume(getTimeReductionLevel(this) < maxTimeReductionLevel),
          () => [0, [getTimeReductionPrice(this), fomoToken]],
          (callback) => {
            const timeReductionLevel = getTimeReductionLevel(this);
            require(timeReductionLevel < maxTimeReductionLevel);

            //const spent = timeReductionPrices[getTimeReductionLevel(this)];

            timeReductionM[this] = timeReductionLevel + 1;
            
            Buyer.only(() => {
              // TODO I have no idea why it doesn't work, so have to return address too. Same for discounts
              //if (didPublish()) {
                interact.updateTimeReductionLevel(this, timeReductionLevel + 1);
              //}
            });

            const participantStats = getParticipantStats(this);
            callback(participantStats);
            return [ true, winner, ticketsSold, totalRaised, price, paidToFunder, currentDeadline ];
          }
        )
        .api(
          Api.getParticipantStats,
          (callback) => {
            const participantStats = getParticipantStats(this);
            callback(participantStats);

            return [ true, winner, ticketsSold, totalRaised, price, paidToFunder, currentDeadline ];
          }
        )
        .timeout(absoluteSecs(currentDeadline), () => {
          Anybody.publish();
          return [ false, winner, ticketsSold, totalRaised, price, paidToFunder, currentDeadline ];
        });

    // Whoever buys last wins and receives balance
    transfer([balance(), [1, nftPrize]]).to(winner);
    commit();
    showOutcome(winner);

    // Inifinite loop which does nothing.
    Anybody.publish();
    var [] = []
    invariant(balance() == 0)
    while ( true ) { commit(); Funder.publish(); continue; }

    commit();
  });
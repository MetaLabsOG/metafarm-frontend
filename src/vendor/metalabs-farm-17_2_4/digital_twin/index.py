from collections import defaultdict
from dataclasses import dataclass

BIG_NUMBER = 1_000_000_000_000_000_000  # 1e18
# Defines the least non-zero fee percentage (one-millionth, 0.0001 %)
FEE_RATIO = 1_000_000


@dataclass
class LocalState:
    staked: int = 0
    reward: int = 0
    lockTimestamp: int = 0
    rewardPerTokenStored: int = 0


@dataclass
class Balances:
    algo: int = 0
    stakeToken: int = 0
    rewardToken: int = 0


@dataclass
class Farm:
    # Ledger state
    accounts: defaultdict(Balances)
    localStates: defaultdict(LocalState)
    balances: Balances

    # Contract params
    beneficiary: str
    creationFee: int
    beginBlock: int
    endBlock: int
    rewardPerBlock: int
    lockLengthBlocks: int

    # Global state
    lastUpdateBlock: int = 0
    rewardPerTokenStored: int = 0
    currentBlock: int = 0
    rewardTokenFees: int = 0
    algoFees: int = 0

    def totalStaked(self) -> int:
        return sum(map(lambda state: state.staked, self.localStates.values()))

    def lastBlockWithRewards(self) -> int:
        return min(self.currentBlock, self.endBlock)

    def isLocked(self, acc: int) -> bool:
        return self.localStates[acc].lockTimestamp + self.lockLengthBlocks > self.currentBlock

    def acceptStakeToken(self, amount: int, acc: str) -> None:
        if self.accounts[acc].stakeToken < amount:
            print("cannot accept stakeToken, user doesn't have enough")
            return
        self.accounts[acc].stakeToken -= amount
        self.balances.stakeToken += amount

    def transferStakeToken(self, amount: int, acc: str) -> None:
        if self.balances.stakeToken < amount:
            print("cannot send stakeToken, contract doesn't have enough")
            return

        self.balances.stakeToken -= amount
        self.accounts[acc].stakeToken += amount

    def transferRewardToken(self, amount: int, acc: str) -> None:
        if self.balances.rewardToken < amount:
            print("cannot send rewardToken, contract doesn't have enough")
            return
        self.balances.rewardToken -= amount
        self.accounts[acc].rewardToken += amount

    def updateReward(self, acc: str) -> None:
        rewardBlocksPassed = self.lastBlockWithRewards() - self.lastUpdateBlock
        ts = self.totalStaked()
        if ts != 0:
            self.rewardPerTokenStored += rewardBlocksPassed * \
                self.rewardPerBlock * BIG_NUMBER // ts

        ls = self.localStates[acc]

        ls.reward += ls.staked * \
            (self.rewardPerTokenStored - ls.rewardPerTokenStored) // BIG_NUMBER

        ls.rewardPerTokenStored = self.rewardPerTokenStored

    def contractMethod(func):
        def wrapper(*args):
            self = args[0]
            acc = args[1]
            ls = self.localStates[acc]

            self.updateReward(acc)
            rv = func(*args)
            self.lastUpdateBlock = ls.lockTimestamp = self.currentBlock
            return rv

        return wrapper

    @contractMethod
    def stake(self, acc: str, amount: int) -> None:
        ls = self.localStates[acc]
        if self.currentBlock > self.endBlock:
            print("can't stake todo")
            return

        self.acceptStakeToken(amount, acc)
        ls.staked += amount

    @contractMethod
    def unstake(self, acc: str, amount: int) -> None:
        ls = self.localStates[acc]
        if amount > ls.staked:
            print("Trying to unstake more than is staked")
            return

        if self.isLocked(acc):
            ls.reward = 0

        ls.staked -= amount
        self.transferStakeToken(amount, acc)

    @contractMethod
    def claim(self, acc: str) -> None:
        ls = self.localStates[acc]
        if self.isLocked(acc):
            print("Cannot claim because the stake is locked")
            return

        self.transferRewardToken(ls.reward, acc)
        ls.reward = 0

    @contractMethod
    def claimFees(self, acc: str) -> None:
        if acc != self.beneficiary:
            return

        self.transferStakeToken(self.rewardTokenFees)
        self.transferAlgo(self.algoFees)

        self.rewardTokenFees = 0
        self.algoFees = 0

    def setTime(self, ts) -> None:
        self.currentBlock = ts


accounts = defaultdict(Balances)

accounts["Cometa"] = Balances(
    1000,
    0,
    0
)

accounts["creator"] = Balances(
    100,
    1000,
    0
)

accounts["farmer_1"] = Balances(
    10,
    1000,
    0
)

accounts["farmer_2"] = Balances(
    20,
    2000,
    0
)

farm = Farm(
    accounts=accounts,
    balances=Balances(0, 0, 1_000_000),
    localStates=defaultdict(LocalState),

    beneficiary="Cometa",
    creationFee=1000,
    beginBlock=100,
    endBlock=1100,
    rewardPerBlock=1000,
    lockLengthBlocks=0,
)


rounds = 1000
acc = "farmer_1"

farm.stake(acc, 100)
farm.setTime(1)
farm.unstake(acc, 10)
farm.setTime(2)
farm.claim(acc)
farm.setTime(3)
farm.unstake(acc, 100)

# transfer leftovers to creator

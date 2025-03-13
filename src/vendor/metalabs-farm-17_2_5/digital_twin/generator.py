from index import Farm, Balances, LocalState
from random import randrange
from enum import Enum


MAX_FEE = 1_000_000
MAX_END_BLOCK = 2
MAX_REWARD_PER_BLOCK = 3

ACCOUNTS = 2


def generate_farm(lock=False, fee=False, accounts=ACCOUNTS):
    lock_blocks = 1 + randrange(10) if lock else 0
    fee_kind = randrange(2)

    stake_fee = 1 + randrange(MAX_FEE) if fee and fee_kind == 0 else 0
    unstake_fee = 1 + randrange(MAX_FEE) if fee and fee_kind == 1 else 0

    end_block = 1 + randrange(MAX_END_BLOCK)
    reward_per_block = 1 + randrange(MAX_REWARD_PER_BLOCK)

    return Farm(
        accounts=[
            Account(
                localState=LocalState(),
                balances=Balances(10_000_000, 1_000_000, 0)
            ) for _ in range(accounts)
        ],
        balances=Balances(0, 0, 1_000_000),
        endBlock=end_block,
        rewardPerBlock=reward_per_block,
        stakeFee=0,
        unstakeFee=0,
        lockLengthBlocks=0,
    )


class Action(Enum):
    STAKE = 1
    UNSTAKE = 2
    CLAIM = 3


def generate_test(lock, fee, accounts=ACCOUNTS):
    farm = generate_farm(lock=lock, fee=fee, accounts=accounts)

    account = randrange(accounts)
    action = Action(randrange(len(Action)))

    if action == Action.STAKE:
      
    elif action == Action.UNSTAKE:

    elif action == Action.CLAIM:

    else:
      print("Something is wrong (unknown action)")
      exit(1)


if __name__ == "__main__":
    generate_test(False, False)

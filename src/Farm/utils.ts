import { BigNumberish } from '@ethersproject/bignumber';
import { reach } from '../AppContext';
import { Contract } from '../types';

export type InitialState = {
    beneficiary: string;
    creationFee: BigNumberish;
    stakeToken: number;
    rewardToken: number;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: BigNumberish;
    extraAlgoRewardPerBlock: BigNumberish;
    lockLengthBlocks: number;
    flatAlgoCreationFee: number;
};

export async function deployFarm(ctc: Contract, initialState: InitialState): Promise<BigNumberish> {
    const creatorInteract = {
        getParams: () => initialState,
        deployed: reach.disconnect,
    };

    await reach.withDisconnect(async () => {
        await ctc.p.Creator(creatorInteract);
    });

    return ctc.getInfo();
}

export enum ColumnType {
    Name = 'Pool',
    Tvl = 'TVL',
    Apr = 'APR',
    Stake = 'Staked',
    Reward = 'Reward',
    Ends = 'Ends',
}

export const POOL_COLUMN_WIDTH: Record<ColumnType, string> = {
    [ColumnType.Name]: '300px',
    [ColumnType.Tvl]: '130px',
    [ColumnType.Apr]: '130px',
    [ColumnType.Stake]: '120px',
    [ColumnType.Reward]: '150px',
    [ColumnType.Ends]: '170px',
};

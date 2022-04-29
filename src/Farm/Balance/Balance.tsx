import { Amount } from './Amount';
import { BalanceList } from './styled';

const balances = [
    { title: 'Balance', value: '300' },
    { title: 'Total Stake', value: '200' },
    { title: 'Total Reward', value: '100(23 META)' },
];

export const Balance = () => (
    <BalanceList>
        {balances.map(({ title, value }) => (
            <Amount title={title} value={value} />
        ))}
    </BalanceList>
);

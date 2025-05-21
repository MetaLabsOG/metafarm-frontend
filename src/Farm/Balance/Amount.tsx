import { numberRound } from '../PoolList/Pool/utils';
import { AmountContainer, AmountTitle, AmountValue } from './styled';

type AmountPropsType = {
    title: string;
    value: number;
};

export function Amount({ title, value }: AmountPropsType) {
    return (
        <AmountContainer>
            <AmountTitle>{title}</AmountTitle>
            <AmountValue>{`$${numberRound(value)}`}</AmountValue>
        </AmountContainer>
    );
}

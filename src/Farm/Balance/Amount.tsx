import { formatDecimalsMeaningful } from '../../common/lib';
import { AmountContainer, AmountTitle, AmountValue } from './styled';

type AmountPropsType = {
    title: string;
    value: number;
};

export const Amount = ({ title, value }: AmountPropsType) => (
    <AmountContainer>
        <AmountTitle>{title}</AmountTitle>
        <AmountValue>{`$${formatDecimalsMeaningful(value)}`}</AmountValue>
    </AmountContainer>
);

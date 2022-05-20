import { AmountContainer, AmountTitle, AmountValue } from './styled';

type AmountPropsType = {
    title: string;
    value: number;
};

export const Amount = ({ title, value }: AmountPropsType) => (
    <AmountContainer>
        <AmountTitle>{title}</AmountTitle>
        <AmountValue>{`$${value}`}</AmountValue>
    </AmountContainer>
);

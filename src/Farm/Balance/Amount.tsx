import { AmountContainer, AmountTitle, AmountValue } from './styled';
import { useFlashOnChange } from '../../hooks/useFlashOnChange';

type AmountPropsType = {
    title: string;
    value: number;
};

export function Amount({ title, value }: AmountPropsType) {
    // Format the value with enhanced currency formatting
    const decimalPlaces = value < 1 ? 2 : 0;
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    }).format(value);

    const isFlashing = useFlashOnChange(formatted);

    return (
        <AmountContainer>
            <AmountTitle>{title}</AmountTitle>
            <AmountValue className={isFlashing ? 'flash-update' : ''}>
                {formatted}
            </AmountValue>
        </AmountContainer>
    );
}

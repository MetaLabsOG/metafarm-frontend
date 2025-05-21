import { useState, useEffect, useRef } from 'react';
import { numberRound } from '../PoolList/Pool/utils';
import { AmountContainer, AmountTitle, AmountValue } from './styled';

type AmountPropsType = {
    title: string;
    value: number;
};

export function Amount({ title, value }: AmountPropsType) {
    const [displayValue, setDisplayValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);
    const prevValueRef = useRef(value);

    useEffect(() => {
        // Only animate if the value has changed and is not the initial render
        if (prevValueRef.current !== value) {
            setIsAnimating(true);
            setDisplayValue(value);

            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 1000);

            prevValueRef.current = value;
            return () => clearTimeout(timer);
        }
    }, [value]);

    // Format the value with enhanced currency formatting
    const formatCurrency = (amount: number) => {
        // For values less than 1, show 2 decimal places
        const decimalPlaces = amount < 1 ? 2 : 0;

        // Format with proper currency formatting
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces
        }).format(amount);

        // For non-zero values, add a subtle green color
        const isNonZero = amount > 0;

        return { formatted, isNonZero };
    };

    const { formatted, isNonZero } = formatCurrency(displayValue);

    return (
        <AmountContainer>
            <AmountTitle>{title}</AmountTitle>
            <AmountValue
                className={`${isAnimating ? 'pulse' : ''} ${isNonZero || title === "My Stake" ? 'non-zero' : ''}`}
            >
                {formatted}
            </AmountValue>
        </AmountContainer>
    );
}

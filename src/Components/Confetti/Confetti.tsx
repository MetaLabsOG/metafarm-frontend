import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import confetti from 'canvas-confetti';

const canvasStyles: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
};

export default function Confetti({ showConfetti, onFinish }: { showConfetti: boolean; onFinish?: VoidFunction }) {
    const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);

    const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio: number, options: confetti.Options) => {
        refAnimationInstance.current?.({
            ...options,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio),
        } as confetti.Options);
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        makeShot(0.2, {
            spread: 60,
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);

    useEffect(() => {
        if (showConfetti) {
            fire();
            onFinish?.();
        }
    }, [showConfetti, fire, onFinish]);

    return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />;
}

import { ModalContainer, ModalTitle, WelcomeText } from './common/styled';
import Confetti from './Components/Confetti/Confetti';
import { theme } from './theme';

export function WelcomeModal() {
    return (
        <ModalContainer style={{ maxWidth: 500 }}>
            <ModalTitle style={{ textAlign: 'center' }}>WELCOME TO COMETA!</ModalTitle>
            <WelcomeText>Cometa is your intelligent yield optimizer on Algorand. Farm, stake, swap, and zap — all in one place.</WelcomeText>
            <WelcomeText>Our smart contracts are audited by CertiK.</WelcomeText>
            <a
                target="_blank"
                href="https://www.certik.com/projects/cometa"
                rel="noreferrer"
                style={{ textDecoration: 'none', border: 0, outline: 'none', width: '100%' }}
            >
                <WelcomeText style={{ color: theme.lightGreen, paddingTop: 0 }}>View audit report</WelcomeText>
            </a>
            <Confetti showConfetti />
        </ModalContainer>
    );
}

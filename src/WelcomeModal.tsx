import { Heading2, ModalContainer, ModalTitle, WelcomeText } from './common/styled';
import Confetti from './Components/Confetti/Confetti';
import { theme } from './theme';

export function WelcomeModal() {
    return (
        <ModalContainer style={{ maxWidth: 500 }}>
            <ModalTitle style={{ textAlign: 'center' }}>WELCOME TO COMETA!</ModalTitle>
            <WelcomeText>🚀 Win CosmicChamps NFT for any token swapped in COSG for more than 100 ALGO!</WelcomeText>
            <WelcomeText>🚀 Cometa farming audit is done!</WelcomeText>
            <a
                target="_blank"
                href="https://www.certik.com/projects/cometa"
                rel="noreferrer"
                style={{ textDecoration: 'none', border: 0, outline: 'none', width: '100%' }}
            >
                <WelcomeText style={{ color: theme.lightGreen, paddingTop: 0 }}>Check it here!</WelcomeText>
            </a>
            <WelcomeText style={{ textAlign: 'center' }}>HAVE A GREAT DAY!</WelcomeText>
            <Confetti showConfetti />
        </ModalContainer>
    );
}

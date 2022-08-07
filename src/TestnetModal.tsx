import { Heading2, ModalContainer, ModalTitle } from './common/styled';
import Confetti from './Components/Confetti/Confetti';
import { theme } from './theme';

export const TestnetModal = () => {
    return (
        <ModalContainer>
            <ModalTitle>WELCOME TO COMETA TESTNET!</ModalTitle>
            <a
                target="_blank"
                href="https://dispenser.testnet.aws.algodev.network/"
                rel="noreferrer"
                style={{ textDecorationColor: '#7a7a7a' }}
            >
                <Heading2 style={{ fontFamily: 'Montserrat', fontSize: '20px' }}>
                    Use dispenser to get testnet ALGOs
                </Heading2>
            </a>
            <Heading2 style={{ display: 'flex', justifyContent: 'center', color: theme.lightGray }}>ENJOY!</Heading2>
            <Confetti showConfetti />
        </ModalContainer>
    );
};

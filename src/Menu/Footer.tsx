import { FooterContainer, FooterItem, Logo, MenuItem } from './styled';
import logo from '../imgs/logo.png';
import { ALGONET } from '../AppContext';
import { theme } from '../theme';

export const Footer = () => {
    return (
        <FooterContainer>
            <MenuItem to="/">
                <Logo src={logo} alt="logo" height="40px" />
            </MenuItem>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FooterItem>This is the first public beta version. Use the dApp at your own risk.</FooterItem>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://cometa.farm/terms-of-use'}
                    style={{ color: theme.green }}
                >
                    <FooterItem>Terms of Use</FooterItem>
                </a>
            </div>
            <FooterItem>{ALGONET}</FooterItem>
        </FooterContainer>
    );
};

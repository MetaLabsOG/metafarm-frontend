import logo from '../imgs/logo.png';
import { ALGONET } from '../AppContext';
import { theme } from '../theme';
import { FooterContainer, FooterItem, FooterLink, Logo, MenuItem } from './styled';

export function Footer() {
    return (
        <FooterContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MenuItem to="/">
                    <Logo src={logo} alt="logo" height="40px" />
                </MenuItem>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FooterItem>This is the first public beta version. Use the dApp at your own risk.</FooterItem>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://cometa.farm/terms-of-use"
                        style={{ color: theme.lightGreen }}
                    >
                        <FooterItem>Terms of Use</FooterItem>
                    </a>
                </div>
                <FooterItem>{ALGONET}</FooterItem>
            </div>
            <div style={{ display: 'flex-end', gap: '10px' }}>
                <FooterLink target="_blank" href="https://twitter.com/CometaHub" rel="noreferrer">
                    Twitter
                </FooterLink>
                <FooterLink target="_blank" href="https://discord.gg/ejYjrHQbPv" rel="noreferrer">
                    Discord
                </FooterLink>
            </div>
        </FooterContainer>
    );
}

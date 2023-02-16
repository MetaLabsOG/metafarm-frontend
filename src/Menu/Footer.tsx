import twitter from '../imgs/twitter.svg';
import discord from '../imgs/discord.svg';
import { ALGONET } from '../AppContext';
import { theme } from '../theme';
import { FooterContainer, FooterItem, FooterText, Logo } from './styled';

export function Footer() {
    return (
        <FooterContainer>
            {/*<FooterItem>{ALGONET}</FooterItem>*/}
            <a target="_blank" href="https://algonode.io/" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <FooterItem>powered by Algonode.io</FooterItem>
            </a>
            <FooterText>
                <FooterItem>This is the first public beta version. Use the dApp at your own risk. </FooterItem>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cometa.farm/terms-of-use"
                    style={{ textDecoration: 'none' }}
                >
                    <FooterItem style={{ color: theme.newWhite }}>Terms of Use</FooterItem>
                </a>
            </FooterText>
            <div style={{ display: 'flex', gap: '20px' }}>
                <a target="_blank" href="https://twitter.com/CometaHub" rel="noreferrer">
                    <Logo src={twitter} alt="twitter" height="17px" />
                </a>
                <a target="_blank" href="https://discord.gg/ejYjrHQbPv" rel="noreferrer">
                    <Logo src={discord} alt="discord" height="17px" />
                </a>
            </div>
        </FooterContainer>
    );
}

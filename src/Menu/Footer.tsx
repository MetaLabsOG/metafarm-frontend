import twitter from '../imgs/twitter.svg';
import discord from '../imgs/discord.svg';
import email from '../imgs/email.svg';
import telegram from '../imgs/telegram.svg';
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
                <FooterItem>© Cometa 2022 — 2026. </FooterItem>
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
                <a target="_blank" href="https://twitter.com/CometaHub" rel="noreferrer" className="footer-social">
                    <Logo src={twitter} alt="twitter" height="24px" />
                </a>
                <a target="_blank" href="https://discord.gg/u7JgwAcUwp" rel="noreferrer" className="footer-social">
                    <Logo src={discord} alt="discord" height="24px" />
                </a>
                <a target="_blank" href="mailto:team@cometa.wtf" rel="noreferrer" className="footer-social">
                    <Logo src={email} alt="email" height="24px" />
                </a>
                <a target="_blank" href="https://t.me/cometahub" rel="noreferrer" className="footer-social">
                    <Logo src={telegram} alt="telegram" height="24px" />
                </a>
            </div>
        </FooterContainer>
    );
}

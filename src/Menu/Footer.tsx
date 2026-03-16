import twitter from '../imgs/twitter.svg';
import discord from '../imgs/discord.svg';
import email from '../imgs/email.svg';
import telegram from '../imgs/telegram.svg';
import { FooterContainer, FooterItem, FooterText, FooterPoweredBy, Logo } from './styled';

export function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                <FooterItem>© Cometa 2022 — 2026</FooterItem>
                <span style={{ color: 'var(--gray)', margin: '0 4px' }}>·</span>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cometa.farm/terms-of-use"
                    style={{ textDecoration: 'none' }}
                >
                    <FooterItem style={{ color: 'var(--newWhite)' }}>Terms of Use</FooterItem>
                </a>
            </FooterText>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a target="_blank" href="https://twitter.com/CometaHub" rel="noreferrer" className="footer-social">
                    <Logo src={twitter} alt="Twitter" height="24px" />
                </a>
                <a target="_blank" href="https://discord.gg/u7JgwAcUwp" rel="noreferrer" className="footer-social">
                    <Logo src={discord} alt="Discord" height="24px" />
                </a>
                <a target="_blank" href="mailto:team@cometa.wtf" rel="noreferrer" className="footer-social">
                    <Logo src={email} alt="Email" height="24px" />
                </a>
                <a target="_blank" href="https://t.me/cometahub" rel="noreferrer" className="footer-social">
                    <Logo src={telegram} alt="Telegram" height="24px" />
                </a>
            </div>
            <FooterPoweredBy>
                <a target="_blank" href="https://algonode.io/" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Algorand Mainnet · Algonode.io
                </a>
            </FooterPoweredBy>
        </FooterContainer>
    );
}

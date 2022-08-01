import { FooterContainer, FooterItem, Logo, MenuItem } from './styled';
import logo from '../imgs/logo.png';
import { ALGONET } from '../AppContext';

export const Footer = () => {
    return (
        <FooterContainer>
            <MenuItem to="/">
                <Logo src={logo} alt="logo" height="40px" />
            </MenuItem>
            <FooterItem>This is the first public beta version. Use the dApp at your own risk.</FooterItem>
            <FooterItem>{ALGONET}</FooterItem>
        </FooterContainer>
    );
};

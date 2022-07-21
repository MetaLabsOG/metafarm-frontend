import { FooterContainer, Logo, MenuItem } from './styled';
import logo from '../imgs/logo.png';
import { ALGONET } from '../AppContext';

export const Footer = () => {
    return (
        <FooterContainer>
            <MenuItem to="/">
                <Logo src={logo} alt="logo" height="40px" />
            </MenuItem>
            <div style={{ fontFamily: 'Montserrat', marginTop: 'auto', marginBottom: 'auto' }}>{ALGONET}</div>
        </FooterContainer>
    );
};

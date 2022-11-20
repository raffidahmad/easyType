import logo from '../../assets/EasyTypeLogo_Green.svg';
import styled from 'styled-components'
import Button from '../Button';
import Email from '../Email';

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile ? "column" : "row"};
    font-size: 14px;
    font-weight: 400;
    justify-content: space-between;
    align-items: center;
    margin: 3% 20%;
    img {
        width: ${props => props.isMobile ? "50%" : "auto"};
        margin-bottom: ${props => props.isMobile ? "20px" : "0"};
    }
`

function Header(props) {

    return (
        <Container isMobile={props.isMobile}>
            <img src={logo} alt="logo" />
            <div style={{
                display: 'flex',
                flexDirection: props.isMobile ? "column" : "row",
                gap: '20px',
                alignItems: 'center',
            }}>
                <Email />
                <Button name="TRY FOR FREE" />
            </div>
        </Container>
    )
}

export default Header;
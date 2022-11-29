import logo from '../../assets/EasyTypeLogo_Green.svg';
import styled from 'styled-components'
import Form from '../Form';
const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile ? "column" : "row"};
    font-size: 14px;
    font-weight: 400;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
    margin-left: 7%;
    margin-right: 7%;
    img {
        width: ${props => props.isMobile ? "50%" : "auto"};
    }
`

function Header(props) {
    return (
        <Container isMobile={props.isMobile} style={{
            marginBottom: props.isMobile ? "5rem" : "7rem",
        }}>
            <img src={logo} alt="logo" style={{
            marginBottom: props.isMobile ? "5rem" : "7rem"
                
            }}/>
            <Form setTrial={props.setTrial} isMobile={props.isMobile}/>
        </Container>
    )
}

export default Header;
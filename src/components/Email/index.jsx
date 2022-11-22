import styled from 'styled-components'

const Container = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    border-bottom: 2px solid #000000;
    padding: 0 30px 8px;
`
const Input = styled.input`
    text-align: center;
    border:none;
    color: black;
    :focus {
        outline:none;
        border:none;
    };
    ::placeholder {
        color: #000000;
        font-weight: 900;
    };
    
`

function Email(props) {
    return (
        <Container>
            <Input type="email" required placeholder="Submit your E-mail" />
        </Container>
    )
}

export default Email
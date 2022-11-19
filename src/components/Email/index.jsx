import styled from 'styled-components'

const Container = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    border-bottom: 2px solid #000000;
    padding: 0 30px 8px;
    
`

function Email(props) {
    return (
        <Container>
            Submit your E-mail
        </Container>
    )
}

export default Email
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color:  #000000;
    border: 2px solid #000000;
    border-radius: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 25.92px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: #5C9A7B;
    }
`

function Button(props) {
    return (
        <StyledButton style={props.style}>
            {props.name}
        </StyledButton>
    )
}

export default Button
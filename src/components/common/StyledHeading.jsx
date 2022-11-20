import styled from "styled-components";

const Heading = styled.h1`
    font-size: 112.18px;
    font-weight: 700;
    line-height: 111.56px;
    text-align: center;
    color: #0C0C0D;
    mark{
        color: #568AB6;
        background: #F1D06B;
        display: inline-block;
        border-radius:32rem;
        line-height: 0rem;
        padding: 0rem 1rem;
        padding-bottom: 2.5rem;
    }
    span{
        color: #0C0C0D;
    }
    h1{
        color:#568AB6;
        font-size:inherit;
        display:inline-block;
    }
    `

function StyledHeading(props) {
    return (
        <Heading style={props.style}>
            {props.children}
        </Heading>
    )
}

export default StyledHeading
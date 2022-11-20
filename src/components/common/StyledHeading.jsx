import styled from "styled-components";

const Heading = styled.h1`
    font-size: ${props => props.isMobile ? '50px' : '112.18px'};
    font-weight: 700;
    line-height: ${props => props.isMobile ? '40px' : '112.18px'};
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
    b{
        color:#568AB6;
        font-size:inherit;
        display:inline-block;
    }
    `

function StyledHeading(props) {
    return (
        <Heading style={props.style} isMobile={props.isMobile}>
            {props.children}
        </Heading>
    )
}

export default StyledHeading
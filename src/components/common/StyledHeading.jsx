import Heading from "./Heading"

function StyledHeading(props) {
    return (
        <Heading style={props.style} isMobile={props.isMobile}>
            {props.children}
        </Heading>
    )
}


export default StyledHeading
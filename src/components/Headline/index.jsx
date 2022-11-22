import styled from "styled-components";
import Form from "../Form";
import StyledHeading from "../common/StyledHeading";
import Text from "../common/StyledText";
const Container = styled.div`
    display: flex;
    flex-direction: ${props => !props.isMobile ? "column" : "row"};
    justify-content: center;
    align-items: center;
    `

function Headline(props) {
    return (
        <Container>
            <div style={{
                width: props.isMobile ? '90%' : '50%',
            }}>
                <Text>
                    👋 Welcome to <span>easytype.ai</span>
                </Text>
                <StyledHeading isMobile={props.isMobile}>
                    writing essays... made easy <br></br>with <mark>AI<span>.</span></mark>
                </StyledHeading>
               <Form setTrial={props.setTrial}/>
                <Text style={{
                    margin: 'auto',
                    marginTop: '5rem',
                    width: props.isMobile ? '90%' : '90%',
                }}>
                    Easytype makes ✏️  writing easy and instant with AI .
                    Input a question and It’ll instantly generate a whole essay, splitting it into different parts,
                    and even helping you with all the references 😉.  Imagine, all those hours at the library...gone...in an instant!
                    No more procrastinating, no more endless research. Your imagination unleshead 🚀.
                </Text>
            </div>
        </Container>
    )
}

export default Headline;
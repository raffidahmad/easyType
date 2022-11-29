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

const Text2 = styled(Text)`
    text-align: ${props => props.isMobile ? 'left' : 'center'};
    `
function Headline(props) {
    return (
        <Container>
            <div style={{
                width: props.isMobile ? '100%' : '70%',
            }}>
                <Text>
                    👋 Welcome to <span>easytype.ai</span>
                </Text>
                <StyledHeading isMobile={props.isMobile} style={{
                    marginBottom:props.isMobile ? '30%' : '4%',
                    marginTop: props.isMobile ? '20%' : ''
                    }}>
                    writing essays...<br></br> made easy<br></br> with <mark>AI<span>.</span></mark>
                </StyledHeading>
             
               <Form setTrial={props.setTrial} isMobile={props.isMobile}/>
                <Text2 isMobile={props.isMobile} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '5rem',
                    marginBottom: '5rem',
                    width: props.isMobile ? '100%' : '90%',
                }}>
                    Easytype makes ✏️  writing easy and instant with AI .
                    Input a question and It’ll instantly<br></br> generate a whole essay, splitting it into different parts,
                    and even helping you with all<br></br>  the references 😉. Imagine, allthose hours at the library...gone...in an instant!
                    No more<br></br>  procrastinating, no more endless research. Your imagination unleshead 🚀.
                </Text2>
            </div>
        </Container>
    )
}

export default Headline;
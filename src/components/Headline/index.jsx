import styled from "styled-components";
import Email from "../Email";
import Button from "../Button";
import StyledHeading from "../common/StyledHeading";
const Container = styled.div`
    display: flex;
    flex-direction: ${props => !props.isMobile ? "column" : "row"};
    justify-content: center;
    align-items: center;
    `

const Text = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 22.08px;
    text-align: center;
    color: #2D2D2D;
    margin-bottom: 20px;
    span{
        font-weight: 700;
    }
`

function Headline(props) {
    return (
        <Container>
            <div style={{
                width: '50%'
            }}>
                <Text>
                    👋 Welcome to <span>easytype.ai</span>
                </Text>
                <StyledHeading>
                    writing essays... made easy with <mark>AI<span>.</span></mark>
                </StyledHeading>
                <div style={{
                    display: 'flex',
                    flexDirection: props.isMobile ? "column" : "row",
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px'
                }}>
                    <Email />
                    <Button name="TRY FOR FREE" />
                </div>
                <Text style={{
                    marginTop: '80px'
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
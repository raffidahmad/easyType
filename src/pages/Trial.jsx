import styled from "styled-components"
import Heading from "../components/common/Heading"
import StyledText from "../components/common/StyledText"
import { useState } from "react"
import NavBar from "../components/Navbar"
const StyledHeading2 = styled(Heading)`
    b{
        color: #6EAE8D;
        text-decoration: underline;
    };
    span{
        color:#F1D06B;
    }
    input{
        border: none;
        outline: none;
        border-bottom: 3px solid black;
        color: #6EAE8D;
        font-size: inherit;
        font-weight: 700;
        width: 60%;
        text-align: center;
        margin-top: 0.6rem;
    }
`

function Trial({isMobile}) {
    const [submitted, setSubmitted] = useState(false)
    function handleSubmit(event){
        event.preventDefault();
        setSubmitted(true);
    }

    const headline = submitted ? <StyledText> <u>Success!</u> Your 500 word essay is on it’s way to your inbox.</StyledText> 
    :  <StyledText> Get your 500 word <span>free essay</span>.</StyledText>

    const title =  !submitted ?
        <StyledHeading2>
            <form onSubmit={(event) => handleSubmit(event)}>
                I need an essay about <input type="text" placeholder="Chiwawas" />.
            </form>
        </StyledHeading2>
        :
        <StyledHeading2>
            Get <span>1000 words</span>
        </StyledHeading2>
    return (
        <>
            <NavBar />
            {headline}
            <div style={{
                width:"50%",
                margin:"auto"
            }}>
                {title}
            </div>
            
            <div style={{
                width:"40%",
                margin: submitted ? "" : "auto",
                marginTop: submitted ? "" : "5rem",
                marginBottom: submitted ? "" :"15rem"
            }}>
            { !submitted && <StyledText style={{ fotnSize: '15px' }}>
                *Write a word or topic you want the essay to be about, press enter and let Easytype write it for you. We’ll e-mail you the results only moments after you press enter.
            </StyledText>
            }
            </div>
            {
                submitted && <StyledText>
                    Your friends will want to try it. <span>Share the link</span> an get a 1000 word essay in return.
                </StyledText>
            }
        </>
    )
}

export default Trial
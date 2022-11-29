import Header from "../components/Header"
import Headline from "../components/Headline";
import Phone from "../components/Phone";
import Features from "../components/Features";
import Form from "../components/Form";
import Text from "../components/common/StyledText";
import StyledHeading from "../components/common/StyledHeading";

function MainContent({ isMobile, setTrial }) {
  return (
    <>
      <div className='semiDiv'>
        <Header isMobile={isMobile} setTrial={setTrial} />
        <Headline isMobile={isMobile} setTrial={setTrial}>👋 Welcome to easytype.ai</Headline>
        <StyledHeading isMobile={isMobile} style={{
          marginTop: '15rem',
          textAlign: 'left',
          width: '40%',
          marginLeft: isMobile ? '' : 'auto',
          marginRight: 'auto',
        }}>
          EasyType,
        </StyledHeading>
        <StyledHeading isMobile={isMobile} style={{
          width: isMobile ? '100%' : '50%',
          marginLeft: isMobile ? '' : '34%',
          marginRight: 'auto',
        }}>
          your co-pilot
        </StyledHeading>
      </div>
      <Phone isMobile={isMobile} />
      <Text style={{
        width: isMobile ? "100%" : "30%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5rem",
        marginBottom: "5rem",
        fontSize: "14px",
      }}>
        What if we told you we didn’t write most of this text. EasyType did.
        And this is how it works 👇.
      </Text>
      <StyledHeading style={{
        marginTop: "8rem",
        marginBottom: "5rem",
        fontSize: isMobile ? "45px" : "118px",
      }}
        isMobile={isMobile}>
        Imagine, write,<br /> & sit back... 🪄
      </StyledHeading>

      <Features isMobile={isMobile} />

      <StyledHeading style={{
        width: isMobile ? "90%" : "100%",
        margin: "auto",
        marginTop: "7rem",
        marginBottom: "10rem",
        fontSize: isMobile ? "45px" : "118px",
      }}
        isMobile={isMobile}>
        Classic Essay writing,<br></br>but <mark>better</mark>
      </StyledHeading>

      <div className="semiDiv">
        <StyledHeading isMobile={isMobile} >
          Try free sample
        </StyledHeading>

        <Text style={{
          width: isMobile ? "100%" : "40%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5rem",
          marginBottom: "5rem",
          textAlign: "left",

        }}>
          On February 1st, we will change the way you’re writing essays.
          Like 22,584 other students, try us now to get a sample of it...you’ll see it’s like magic!
        </Text>
      </div>
      <Form setTrial={setTrial} isMobile={isMobile} />
    </>
  );
}

export default MainContent;
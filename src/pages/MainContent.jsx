import Header from "../components/Header"
import Headline from "../components/Headline";
import Phone from "../components/Phone";
import Features from "../components/Features";
import Form from "../components/Form";
import Text from "../components/common/StyledText";
import StyledHeading from "../components/common/StyledHeading";

function MainContent({isMobile, setTrial}) {
  return (
    <>
    <Header isMobile={isMobile} setTrial={setTrial}/>
    <Headline isMobile={isMobile} setTrial={setTrial}>👋 Welcome to easytype.ai</Headline>
    <StyledHeading isMobile={isMobile} style={{
      width: '40%',
      margin: 'auto',
      marginTop: '15rem',
    }}>
      EasyType,<br></br>  your co-pilot
    </StyledHeading>

    <Phone isMobile={isMobile} />
    <Text style={{
      width: isMobile ? "90%" : "30%",
      margin: "auto",
      marginTop: "5rem",
      marginBottom: "5rem",
    }}>
      What if we told you we didn’t write most of this text. EasyType did.
      And this is how it works 👇.
    </Text>
    <StyledHeading style={{
      marginTop: "8rem",
      marginBottom: "5rem",
    }}
      isMobile={isMobile}>
      Imagine, write,<br /> & sit back... 🪄
    </StyledHeading>

    <Features isMobile={isMobile} />

    <StyledHeading style={{
      width: isMobile ? "90%" : "70%",
      margin: "auto",
      marginTop: "7rem",
      marginBottom: "10rem",
    }}
      isMobile={isMobile}>
      Classic Essay writing, but <mark>better</mark>
    </StyledHeading>

    <StyledHeading isMobile={isMobile}>
      Try free sample
    </StyledHeading>

    <Text style={{
      width: isMobile ? "90%" : "40%",
      margin: "auto",
      marginTop: "5rem",
      marginBottom: "5rem",
    }}>
      On February 1st, we will change the way you’re writing essays.
      Like 22,584 other students, try us now to get a sample of it...you’ll see it’s like magic!
    </Text>
    <Form setTrial={setTrial}/>
  </>
  );
}

export default MainContent;
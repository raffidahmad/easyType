import { useEffect, useState } from "react";
import Banner from "./components/Banner"
import Header from "./components/Header"
import Headline from "./components/Headline";
import StyledHeading from "./components/common/StyledHeading";
import Footer from "./components/Footer";
import Phone from "./components/Phone";
import Features from "./components/Features";
import Social from "./components/Social";
import Email from "./components/Email";
import Button from "./components/Button";
import Text from "./components/common/StyledText";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 786;
  return (
    <div>
      <Banner isMobile={isMobile} />
      <Header isMobile={isMobile} />
      <Headline isMobile={isMobile}>👋 Welcome to easytype.ai</Headline>

      <StyledHeading isMobile={isMobile}>
        EasyType, <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your co-pilot
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
        width: isMobile ? "90%" : "50%",
        margin: "auto",
        marginTop: "5rem",
        marginBottom: "5rem",
      }} 
      isMobile={isMobile}>
        Classic Essay writing, but <mark>better</mark>
      </StyledHeading>

      <StyledHeading isMobile={isMobile}>
        Try free sample
      </StyledHeading>

      <Text style={{
        width: isMobile ? "90%" : "50%",
        margin: "auto",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}>
        On February 1st, we will change the way you’re writing essays.
        Like 22,584 other students, try us now to get a sample of it...you’ll see it’s like magic!
      </Text>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? "column" : "row",
        gap: '20px',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: "15rem",
      }}>
        <Email />
        <Button name="TRY FOR FREE" />
      </div>

      <StyledHeading isMobile={isMobile}>
        Let's Get <b>#social</b>
      </StyledHeading>
      
      <Social isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  )
}

export default App

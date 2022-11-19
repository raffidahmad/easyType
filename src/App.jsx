import { useEffect, useState } from "react";
import Banner from "./components/Banner"
import Header from "./components/Header"
import Headline from "./components/Headline";
import StyledHeading from "./components/common/StyledHeading";
import Footer from "./components/Footer";
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
      <StyledHeading>
        EasyType, <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your co-pilot
      </StyledHeading>
      Imagine, write,
      & sit back... 🪄
      <Footer isMobile={isMobile} />
    </div>
  )
}

export default App

import { useEffect, useState } from "react";
import Banner from "./components/Banner"
import StyledHeading from "./components/common/StyledHeading";
import Footer from "./components/Footer";
import Social from "./components/Social";
import MainContent from "./pages/MainContent";
import Trial from "./pages/Trial";
import './index.css'
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
  const [trial, setTrial] = useState(false)

  function handleTrial() {
    setTrial(true)
  }
  return (
    <div className="">
      <Banner isMobile={isMobile} />
      <div className="mainDiv" style={{
        marginTop: isMobile ? '10%' : '',
      }}>
        {!trial ? <MainContent isMobile={isMobile} setTrial={() => handleTrial()} /> : <Trial isMobile={isMobile} />}
        <StyledHeading isMobile={isMobile} style={{
          marginTop: "13rem",
        }}>
          Let's Get <b>#social</b>
        </StyledHeading>

        <Social isMobile={isMobile} />
      </div>
      <Footer isMobile={isMobile} />
    </div>
  )
}

export default App

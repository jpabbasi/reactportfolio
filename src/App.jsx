import Navbar from './sections/navbar/navbar'
import Header from './sections/header/header'
import About from './sections/about/about'
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/testimonials';
import Info from './sections/info/info';
import Contact from './sections/contact/contact'
import Footer from './sections/footer/footer'
import FloatingNav from './sections/floating-nav/floatingNav';
import { useRef, useEffect, useState } from 'react'

const App = () => {
  const [themeState, setthemeState] = useState({ background: 'bg-1' });
  const themeHandler = () => {
    setthemeState(prevState => ({
      background: prevState.background === 'bg-1' ? 'bg-2' : 'bg-1'
    }));
  };

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion])

  return (
    <main className={`${themeState.background}`} ref={mainRef}>
      <Navbar currentTheme={themeState.background} themeHandler={themeHandler}/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Info/>
      <Contact/>
      <Footer/>
      <FloatingNav isVisible={showFloatingNav}/>
    </main>
  )
}

export default App

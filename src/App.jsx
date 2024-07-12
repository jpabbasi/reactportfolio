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

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Info/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App

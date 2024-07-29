import { useEffect } from 'react';
import HeaderImage from '../../assets/Header.png'
import './header.css'
import Divider from '@mui/material/Divider';
import data from './data'
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Header = () => {

  // ⚙️ Animate on scroll settings
  // add 'data-aos="effect"' to use it
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
          <div className='header__title'>
            <div className='header__maincontainer' data-aos="fade-down">
             <div className="title-content">
              <h4>Hey, I'm</h4>
              <h1>Pedro Abbasi</h1>
              <h4>🎨 Front-End Engineer and tech enthusiast</h4>
            </div>
            <div className='header__buttons'>
              <Button href='#contact' sx={{ fontFamily: 'SF Pro Display, sans-serif'}} className='btn sm primary'>
                Contact
              </Button>
            </div>
            </div>
            <Divider data-aos="fade-in" sx={{ borderColor: 'var(--color-light-2)' }} className="header__divider" ></Divider>
            <div className="header__socials" data-aos="fade-up">
              {
                data.map((item)=> (
                  <a href={item.link} className="social-button">
                    {item.icon}
                  </a>))
              }
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header
import HeaderImage from '../../assets/Header.png'
import './header.css'
import Divider from '@mui/material/Divider';
import data from './data'
import Button from '@mui/material/Button';


const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
          <div className='header__title'>
            <div className='header__maincontainer'>
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
            <Divider sx={{ borderColor: 'var(--color-light-2)' }} className="header__divider" ></Divider>
            <div className="header__socials">
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

export default header
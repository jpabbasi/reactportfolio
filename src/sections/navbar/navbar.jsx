import Logo from '../../assets/Logo.jpg'
import NewLogo from '../../assets/NewLogo.png'
import data from './data'
import { CgDarkMode } from "react-icons/cg";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" className="nav__logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><CgDarkMode/></button>
      </div>
    </nav>
  )
}

export default Navbar

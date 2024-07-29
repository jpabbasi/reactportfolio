import data from './data'
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import './navbar.css'
import { Avatar } from '@mui/material';

const Navbar = ({currentTheme, themeHandler}) => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html">
          <Avatar sx={{ bgcolor: 'var(--color-secondary)'}}>⚡</Avatar>
        </a> 
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' onClick={themeHandler}>
        {currentTheme === 'bg-1' ? <MdOutlineWbSunny /> : <MdOutlineModeNight />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

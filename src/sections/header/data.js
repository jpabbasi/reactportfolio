import {RiInstagramFill} from 'react-icons/ri'
import {RiLinkedinBoxFill} from "react-icons/ri";
import {RiGithubFill} from 'react-icons/ri'
import './header.css'

const data = [
    {id: 1,
    link: 'https://linkedin.com/in/pedro-abbasi/',
    icon: <RiLinkedinBoxFill style={{ color: '#0e76a8' }} className="social-icon" />},
    {id: 2,
    link: 'https://instagram.com/pedroabbasi/',
    icon: <RiGithubFill style={{ color: '4078c0' }} className="social-icon" />},
    {id: 3,
    link: 'https://instagram.com/pedroabbasi/',
    icon: <RiInstagramFill style={{ color: '#C13584' }} className="social-icon" />}
]

export default data
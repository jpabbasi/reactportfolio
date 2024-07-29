import {AiOutlineInstagram} from 'react-icons/ai'
import { FaLinkedin } from "react-icons/fa";
import {AiFillGithub} from 'react-icons/ai'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 1, link: 'https://instagram.com/pedroabbasi', icon: <AiOutlineInstagram/>},
    {id: 3, link: 'https://linkedin.com/in/pedro-abbasi/', icon: <FaLinkedin/>},
    {id: 4, link: 'https://github.com/jpabbasi', icon: <AiFillGithub/>}
]
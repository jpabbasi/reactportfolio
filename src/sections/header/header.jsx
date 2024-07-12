import HeaderImage from '../../assets/Header.jpeg'
import data from './data'
import './header.css'

const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Pedro Abbasi</h3>
        <p>I’m a Brazilian Software Engineer with a strong background in
          Product Management and UX/UI Designing with over 5 years of tech industry experience.
          I’ve been collaborating with significant companies to improve their systems and design,
          as well as their workflow. Also worked on personal projects, from product design and architecture to
          fullstack development and deployment.</p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target="_blank"
                rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
      </div>
    </header>
  )
}

export default header

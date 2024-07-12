import About from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import './about.css'
import { HiDownload } from "react-icons/hi";
import Card from '../../components/Card'
import data from './data'

const about = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={About} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div> 
          <p>
          I’m a Brazilian Software Engineer with a strong background in Product
          Management and UX/UI Designing with over 5 years of tech industry experience.
          </p>
          <p>
          I’ve been collaborating with significant companies to improve their systems and design,
          as well as their workflow. Also worked on personal projects, from product design and architecture
          to fullstack development and deployment.
          </p>
          <a href={CV} download className='btn primary'>Download CV<HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default about

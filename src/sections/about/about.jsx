import About from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import './about.css'
import { HiDownload } from "react-icons/hi";
import Card from '../../components/Card'
import data from './data'
import { Button } from '@mui/material';

const about = () => {
  return (
    <section id="about" data-aos="fade-in">
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
          &nbsp; From the bustling tech hubs to the intricate world of user experience,
          I've navigated diverse projects that demanded a perfect blend of creativity and technical prowess. Whether it's refining a product's architecture or diving deep into fullstack development and deployment, my work is driven by a simple principle: making technology more intuitive and effective for everyone.
          I believe that technology should not only solve problems but also inspire and empower its users. This philosophy has guided me in every project, pushing the boundaries of what’s possible and creating solutions that resonate on a deeper level.
          </p>
          <Button sx={{ fontFamily: 'SF Pro Display, sans-serif'}} href={CV} download className='btn sm primary'>Download CV<HiDownload /></Button>
        </div>
      </div>
    </section>
  )
}

export default about

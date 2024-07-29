import Card from '../../components/Card'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project"/>
      </div>
      <div className="flex-container" >
        <div className="flex-item-wrapper">
        <h4 className="flex-item">{project.title}</h4>
        {project.subtitle && <h6>{project.subtitle}</h6>}
        </div>
        <div className="flex-button">
          {
            project.titleTags && project.titleTags.map((item) => (
              <Button sx={{ fontFamily: 'SF Pro Display, sans-serif'}} key={item.id} className='btn sm secondary'>{item.title}</Button>
            )
            )
          }
        </div>
      </div>
      <Divider sx={{ borderColor: 'var(--color-light-2)' }} className="card__divider"/>
      <p dangerouslySetInnerHTML={{ __html: project.desc }}></p>
      <div className="portfolio__project-milestones">
      {
        project.milestones && project.milestones.map((item) => (
          <div className="portfolio__project-milestone" dangerouslySetInnerHTML={{ __html: item.title }}/>
          ))
        }
      </div>
      <div className="portfolio__project-cta">
        {
          project.tags && project.tags.map((item) => (
            <Button sx={{ fontFamily: 'SF Pro Display, sans-serif'}} key={item.id} className='btn sm secondary'>
            {item.title}
          </Button>
            ))
        }
        </div>
      <div>
      <h5 className="portfolio__project-achievs">Achievements</h5>
        {
          project.achievements && project.achievements.map((item) => (
            <div className="portfolio__project-achiev" dangerouslySetInnerHTML={{ __html: item.title }}/>
          ))
        }
      </div>
    </Card>
  )
}

export default Project
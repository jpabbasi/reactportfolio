import './portfolio.css'
import ProjectsCategories from './ProjectsCategories'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data)
  const categories = data.map(item => item.category)
  const uniqueCategories = ["All", ...new Set(categories)]

  const filterProjectsHandler = (category) => {
    if(category === "All") {
      setProjects(data)
      return;
    }
    const filterProjects = data.filter(project => project.category === category)
    setProjects(filterProjects)
  }

  return (
    <section id="portfolio">
      <h2>Past colaborations</h2>
      <p>
        Check out some of the projects I recently colaborated on.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
      </section>
  )
}

export default Portfolio

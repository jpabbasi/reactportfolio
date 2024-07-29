import { useState } from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({categories, onFilterProjects}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const changeCategoryHandler = (activeCategory) => {
    setActiveCategory(activeCategory);
    onFilterProjects(activeCategory);
  }

  return (
    <div className='portfolio__categories'>
    {
      
      categories.map(category =>(
        <CategoryButton key={category} category={category}
        onChangeCategory={() => changeCategoryHandler(category)}
        className={`btn sm ${activeCategory === category ? 'primary' : 'secondary'}`}/>
      ))
    }
    </div>
    )
}

export default ProjectsCategories

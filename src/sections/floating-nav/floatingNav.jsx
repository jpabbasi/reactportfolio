import './floating-nav.css'
import data from './data'
import Scrollspy from 'react-scrollspy'
import Nav from './Nav'
import { useEffect, useState } from 'react'

const FloatingNav = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
  }, [isVisible]);

  const onAnimationEnd = () => {
    if (!isVisible) {
      setShouldRender(false);
    }
  };

  return (
    <ul id="floating__nav"
        className={isVisible ? 'scrollspy' : 'scrollspy hide'}
        onAnimationEnd={onAnimationEnd}>
      <Scrollspy offset={-400} className='scrollspy__icons'
        items={['header', 'about', 'services', 'portfolio', 'contact']}
        currentClassName="active">
          {
            data.map(item => <Nav key={item.id} item={item} />)
          }
      </Scrollspy>
    </ul>
  )
}

export default FloatingNav

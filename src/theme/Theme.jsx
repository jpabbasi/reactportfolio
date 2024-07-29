import { backgroundColors } from "./data"
import BackgroundColor from './BackgroundColor';
import { CgDarkMode } from "react-icons/cg";
import './theme.css'

const Theme = () => {
  return (
    <button id='theme__icon'>
      <CgDarkMode>
      {
        backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
      }
      </CgDarkMode>
    </button>


    // <div>
    //     <h3>Customize Your Theme</h3>
    //     <div className="theme__background-wrapper">
    //         <h5>Background Color</h5>
    //         <div className="theme__background-colors">
    //             {
    //                 backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
    //             }
    //         </div>
    //     </div>
    // </div>
  )
}

export default Theme
import './css/nx-welcome.css'
import logo from './img/logo.svg'
import sectionimg1 from './img/Vector.svg'
import sectionimg2 from './img/Shape.svg'
import sectionimg3 from './img/Shap.svg'
import filter from './img/filter.svg'
import search from './img/search.svg'
import Slider from './slider'


export default function Project() {


  return (
    <div className="Project">
      <div className="header-top">
        <div className="header-top-divs">
          <p>Traffic page default</p>
        </div>
        <div className="header-top-divs">
          <p className='header-top-divs-text'>Version 1.0</p>
        </div>
      </div>
      <header>
        <div className="header-blocks1">
          <div className="logo-block">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="header-blocks2">
          <div className="header-block2-center-div">
            <div className="center-divi-sections">
              <div className="section-img-block">
                <img src={sectionimg2} alt="" />
              </div>
              <p>Traffic</p>
            </div>
            <div className="center-divi-sections">
              <div className="section-img-block">
                <img src={sectionimg1} alt="" />
              </div>
              <p className='color-blcak'>Overview</p>
            </div>
            <div className="center-divi-sections">
              <div className="section-img-block">
                <img src={sectionimg3} alt="" />
              </div>
              <p className='color-blcak'>CSV</p>
            </div>
          </div>
        </div>
        <div className="header-div3">
          <div className='header-div3-div1'>
            <p className='header-div3-title'>Routes list</p>
            <select name="cars" id="cars">
              <option value="Filter"><img src={filter} alt="" /> Filter</option>
              <option value="Filter">Filter</option>
              <option value="Filter">Filter</option>
              <option value="Filter">Filter</option>
            </select>
          </div>
          <div className="header-div3-center-div">
            <img src={search} alt="" className='search-img'/>
            <input type="search" className='search' placeholder='Search by route ID'/>
            <div className='slider-div'><Slider/> </div>
          </div>
        </div>
      </header>

    </div>
  )
}
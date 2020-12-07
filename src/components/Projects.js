import React,{useState} from 'react';
import CarlaProject from "../images/carla-project.png"
import HourX from "../images/test2.jpeg"
import WeigerProject from "../images/test1.png"
import { Link} from "react-router-dom";
import "../css/Projects.css"

const Projects = () => {

    const [slider, setSlider] = useState(0)

    const handleSliderClick = (e, slider) => {
        // set slider to clicked slider
        setSlider(slider)
        // find parent ul
        const ulNode = Array.from(document.querySelector('.projects-list').children)
        // find slider Imagen
        const sliderImg = document.querySelector('.column-img')

        // add transition to slider image
        sliderImg.classList.remove('fade-in')
        setTimeout(() => {
            sliderImg.classList.add('fade-in')
        }, 100)
                

        ulNode.forEach((li, i) => {
            // if index is equal to slider index
            if(i === slider){
                // enable button
                li.classList.remove('disabled')
            } else{
                // disable button
                li.classList.add('disabled')
            }
            })

    }

    return (
        <div id="projects">
            <div className="two-column-row">
                <div className="column-50">
                    <div className="featured-projects">
                        <h2>Featured Projects</h2>
                        <p>Take a look at some of our favorite projects.</p>
                        <ul className="projects-list">
                            <li onClick={(e) => handleSliderClick(e, 0)}><Link to="/"><i className="fas fa-circle"></i>HOURX - ECOMMERCE WEBSITE</Link></li>
                            <li className="disabled" onClick={(e) => handleSliderClick(e, 1)}><Link to="/"><i className="fas fa-circle"></i>CARLA SAHAGUN - GRADUATE PORTFOLIO</Link></li>
                            <li className="disabled" onClick={(e) => handleSliderClick(e, 2)}><Link to="/"><i className="fas fa-circle"></i>WEIGER REMODELING - SERVICES WEBSITE</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="column-50">
                    <div className="column-img fade-in">
                        {slider === 0?
                            <img src={HourX} alt="carla-project" />
                        : slider === 1? 
                            <img src={CarlaProject} alt="carla-project"/>
                        : slider === 2?
                            <img src={WeigerProject} alt="carla-project"/>
                        :null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
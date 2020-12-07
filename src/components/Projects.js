import React,{useState} from 'react';
import CarlaProject from "../images/carla-project.png"
import HourX from "../images/test2.jpeg"
import WeigerProject from "../images/test1.png"
import { Link} from "react-router-dom";
import "../css/Projects.css"

const Projects = () => {

    const [slider, setSlider] = useState(0)

    return (
        <div id="projects">
            <div className="two-column-row">
                <div className="column-50">
                    <div className="featured-projects">
                        <h2>Featured Projects</h2>
                        <p>Take a look at some of our favorite projects.</p>
                        <ul className="projects-list">
                            <li onClick={()=> setSlider(0)}><Link to="/"><i className="fas fa-circle"></i>HOURX - ECOMMERCE WEBSITE</Link></li>
                            <li className="disabled" onClick={()=> setSlider(1)}><Link to="/"><i className="fas fa-circle"></i>CARLA SAHAGUN - GRADUATE PORTFOLIO</Link></li>
                            <li className="disabled" onClick={()=> setSlider(2)}><Link to="/"><i className="fas fa-circle"></i>WEIGER REMODELING - SERVICES WEBSITE</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="column-50">
                    <div className="column-img">
                        {slider === 0?
                            <img src={HourX} alt="carla-project"/>
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
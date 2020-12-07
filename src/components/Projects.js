import React from 'react';
import CarlaProject from "../images/carla-project.png"
import { Link} from "react-router-dom";
import "../css/Projects.css"

const Projects = () => {
    return (
        <div id="projects">
            <div className="two-column-row">
                <div className="column-50">
                    <div className="featured-projects">
                        <h2>Featured Projects</h2>
                        <p>Take a look at some of our favorite projects.</p>
                        <ul className="projects-list">
                            <li><Link to="/weiger"><i className="fas fa-circle"></i>HOURX - ECOMMERCE WEBSITE</Link></li>
                            <li className="disabled"><Link to="/"><i className="fas fa-circle"></i>CARLA SAHAGUN - GRADUATE PORTFOLIO</Link></li>
                            <li className="disabled"><Link to="/"><i className="fas fa-circle"></i>WEIGER REMODELING - SERVICES WEBSITE</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="column-50">
                    <div className="column-img">
                        <img src={CarlaProject} alt="carla-project"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
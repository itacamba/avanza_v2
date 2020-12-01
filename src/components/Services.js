import React from 'react';
import "../css/Services.css"
import { Link} from "react-scroll";
import SEO from "../images/a-logo.png"

const Services = () => {
    return (
        <div className="full-90" id="services">
            <div className="services-content">
                <div className="services-left">
                    <h2>Here's What We Do</h2>
                    <p>We listen, think, craft, and connect
                    you with clients to take your business
                    to the next level.
                    </p>
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="gradient-btn"
                    >CONTACT</Link>
                </div>
                <div className="services-right">
                    <div className="services-column">

                        <div className="service">
                            <img src={SEO} alt=""/>
                            <h3>SEARCH ENGINE OPTIMIZATION</h3>
                            <p>
                                We help you show up in the top of the google
                                search results to ensure your potential customers
                                interact with your brand/business.
                            </p>
                        </div>

                        <div className="service">
                            <img src={SEO} alt=""/>
                            <h3>SEARCH ENGINE OPTIMIZATION</h3>
                            <p>
                                We help you show up in the top of the google
                                search results to ensure your potential customers
                                interact with your brand/business.
                            </p>
                        </div>

                    </div>

                    <div className="services-column">

                        <div className="service">
                            <img src={SEO} alt=""/>
                            <h3>SEARCH ENGINE OPTIMIZATION</h3>
                            <p>
                                We help you show up in the top of the google
                                search results to ensure your potential customers
                                interact with your brand/business.
                            </p>
                        </div>

                        <div className="service">
                            <img src={SEO} alt=""/>
                            <h3>SEARCH ENGINE OPTIMIZATION</h3>
                            <p>
                                We help you show up in the top of the google
                                search results to ensure your potential customers
                                interact with your brand/business.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
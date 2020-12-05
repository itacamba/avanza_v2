import React from 'react';
import "../css/Services.css"
import { Link} from "react-scroll";
import SEO from "../images/seo.png"
import PPC from "../images/ppc.png"
import EmailMarketing from "../images/email_mk.png"
import DesignAndDev from "../images/design_develop.png"

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
                            <div className="service-img">
                                <img src={SEO} alt=""/>
                            </div>
                            <h3>SEARCH ENGINE OPTIMIZATION</h3>
                            <p>
                                We help you show up in the top of the google
                                search results to ensure your potential customers
                                interact with your brand/business.
                            </p>
                        </div>

                        <div className="service">
                            <div className="service-img">
                                <img src={PPC} alt=""/>
                            </div>
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
                            <div className="service-img">
                                <img src={EmailMarketing} alt=""/>
                            </div>
                            <h3>SEARCH ENGINE OPTIMIZATION</h3>
                            <p>
                                We help you show up in the top of the google
                                search results to ensure your potential customers
                                interact with your brand/business.
                            </p>
                        </div>

                        <div className="service">
                            <div className="service-img">
                                <img src={DesignAndDev} alt=""/>
                            </div>
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
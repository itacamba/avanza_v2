import React, {useState, useRef, useEffect} from 'react';
import Logo from "./images/logo.png"
import MobileLogo from "./images/avanza.png"
import X from "./images/x.png"
import { Link} from "react-scroll";
import "./Navigation.css"

const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false) 

     // hide-show header on scroll
     const prevScrollY = useRef(0);

     const [goingDown, setGoingDown] = useState(true);
   
     useEffect(() => {
       const handleScroll = () => {
         const currentScrollY = window.scrollY;
         // will hide the navbar only after 400px
         if (prevScrollY.current < currentScrollY && goingDown && currentScrollY > 400) {
           setGoingDown(false);
           const header = document.getElementById("header")
           header.classList.add('slide-up')
           setMobileMenu(false)
         //   console.log("going down")
         }
         if (prevScrollY.current > currentScrollY && !goingDown) {
           setGoingDown(true);
           const header = document.getElementById("header")
           header.classList.remove('slide-up')
         //   console.log("going up")
 
         }
   
         prevScrollY.current = currentScrollY;
         // The following  line of code gives us the Y coordinates
         // console.log(goingDown, currentScrollY);
       };
   
       window.addEventListener("scroll", handleScroll, { passive: true });
   
       return () => window.removeEventListener("scroll", handleScroll);
     }, [goingDown]);




    return (
        <header className="full-90" id="header">
            <div className="menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            <div className="logo">
              <img src={Logo} alt=""/>
            </div>

            <div className="mobile-logo">
                <img src={MobileLogo} alt=""/>
            </div>

       
            <div className={mobileMenu? "mobile-nav" : "mobile-nav hide"}>
                <div className="mobile-nav-links">
                    <div className="mobile-nav-header">
                        <div className="logo">
                            <img src={MobileLogo} alt="avanza_logo"/>
                        </div>
                        <div className="menu-x" onClick={() => setMobileMenu(!mobileMenu) }>
                            <img src={X} alt=""/>
                        </div>
                    </div>
                <Link
                    activeClass="active"
                    to="services" // this attribute links to an id #services
                    spy={true}
                    smooth={true}
                    duration={500}
                    
                >EXPERTISE</Link>
                <Link
                    activeClass="active"
                    to="approach"
                    spy={true}
                    smooth={true}
                    duration={500}
                >APPROACH</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >PROJECTS</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >CONTACT</Link>
                <Link
                    activeClass="active"
                    to="blog" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >BLOG</Link>

                    <div className="contact-social">
                        <a href="https://m.facebook.com/AvanzaDigitalUSA" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/digital_avanza" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/avanza-digital" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://g.co/kgs/L2wSGn" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>

            <div className="phone-call">
                <a href="#!"><i className="fas fa-phone-alt"></i></a>
            </div>

            <nav className="nav">
                <Link
                    activeClass="active"
                    to="services" // this attribute links to an id #services
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="active"
                >EXPERTISE</Link>
                <Link
                    activeClass="active"
                    to="approach"
                    spy={true}
                    smooth={true}
                    duration={500}
                >APPROACH</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >PROJECTS</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >CONTACT</Link>
                <Link
                    activeClass="active"
                    to="blog" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >BLOG</Link>
            </nav>
        </header>
    );
};

export default Navigation;
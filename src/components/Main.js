import React from 'react';
import "../css/Main.css"
import { Link} from "react-scroll";


const Main = () => {
    return (
        <main className="main vertical-gradient full-90">
            <div className="bg-img"></div>
            <div className="main-content">
                <h3>NOVA'S #1 RATED DIGITAL MARKETING AGENCY</h3>
                <h1>We drive persistent growth to small local businesses.</h1>
                <p>Because we understand what it takes to run and grow a business.</p>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="gradient-btn"
                >I'M READY</Link>
            </div>
            <h4 className="located-at"><i className="far fa-compass"></i>AVANZA OPERATES IN HERNDON VIRGINIA</h4>
        </main>
    );
};

export default Main;
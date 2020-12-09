import React from 'react';
import Innovative from "../images/ppc.png"
import Transparent from "../images/design_develop.png"

import "../css/WhyUs.css"

const WhyUs = () => {
    return (
        <div id="why-us" className="full-90">
            <div className="three-col-row">
                <div className="card">
                    <h2>Work directly with the best</h2>
                    <p>When you choose to work with us, you
                        not only work directly/closely with our 
                        team of professionals but you get to join 
                        us in the journey and we keep you updated...
                    </p>
                    <a href="#!" className="blue-btn">Start now</a>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={Transparent} alt=""/>
                    </div>
                    <h3>TRANSPARENT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Fuga beatae quae 
                     necessitatibus quo repudiandae accusamus 
                     amet maiores consequuntur illum porro?</p>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={Innovative} alt=""/>
                    </div>
                    <h3>INNOVATIVE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Fuga beatae quae 
                     necessitatibus quo repudiandae accusamus 
                     amet maiores consequuntur illum porro?</p>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;
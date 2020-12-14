import React from 'react';
import "../css/Contact.css"

const Contact = () => {
    return (
        <div className="full-90" id="contact">
            <div className="two-column-row">
                <div className="column-50">
                    <h2>Let's Create Together!</h2>
                    <p>Explore our services and let us know if 
                    you think we're the right fit for your dream
                    projects.
                    </p>
                </div>
                <div className="column-50">
                    <form >
                        <p class="error"></p>

                        <div className="name-phone">
                            <input type="text" value="" placeholder="Full Name" name="name" className="form-input full-name" require />
                            <input type="tel" value="" placeholder="Phone Number (000 000 0000)"  name="phone" className="form-input phone" require/>
                        </div>

                        <input type="email" value="" placeholder="Email" name="email" className="form-input email" require/>
                        
                        <input type="text" value=""placeholder="Website (optional)" name="website_url" className="form-input website"/>
                        <h4>Tell us about your business and needs *</h4>
                        <textarea type="text" value="" name="message" className="message" rows="5" placeholder="Your message goes here" require></textarea>

                        <input type="submit" value="Submit" name="submit" className="gradient-btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
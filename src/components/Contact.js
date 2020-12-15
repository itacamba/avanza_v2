import React from 'react';
import emailjs from 'emailjs-com';
import "../css/Contact.css"

const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();
        const errorJs = document.querySelector('.send-failure')
        emailjs.sendForm('service_t2dxw3t', 'template_dmeexor', e.target, 'user_XiMZOd167CfBlFaRvEfg3')
  
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error)
              errorJs.style.display = "block"
              setTimeout(()=>{
                  errorJs.style.display = "none"
              },3000)
          });
      }

    const handleSubmit = (e) => {
        console.log('hit')
        e.preventDefault()
        const name = document.querySelector('.full-name')
        const email = document.querySelector('.email')
        const website = document.querySelector('.website')
        const phone = document.querySelector('.phone')
        const message = document.querySelector('.message')
        const error = document.querySelector('.form-error')
        const success = document.querySelector('.send-success')
        
        if(isEmpty(name)){
            // error name
            error.style.visibility = "visible"
        } else if (isEmpty(email)){
            // error email
            error.style.visibility = "visible"
        } else if (isEmpty(message)){
            // error message
            error.style.visibility = "visible"
        } else if(isEmpty(phone)){
            // error message
            error.style.visibility = "visible"
        } else {
            error.style.display = "none"
            // send email
            sendEmail(e)
            // clear form
            name.value = ""
            email.value = ""
            message.value = ""
            phone.value = ""
            website.value = ""
            // show success!
            success.style.display = "block"
            setTimeout(() => {
                success.style.display = "none"
            },3000)
    
        }
    }

    const isEmpty = (node) => {
        return node.value === ""? true : false
    }


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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-error">  * Please fill out all required fields.</div>

                        <div className="name-phone">
                            <input type="text"  placeholder="Full Name" name="name" className="form-input full-name" />
                            <input type="tel" placeholder="Phone Number (000 000 0000)"  name="phone" className="form-input phone" />
                        </div>

                        <input type="email" placeholder="Email" name="email" className="form-input email"/>
                        
                        <input type="text" placeholder="Website (optional)" name="website" className="form-input website"/>
                        <h4>Tell us about your business and needs *</h4>
                        <textarea type="text" name="message" className="message" rows="5" placeholder="Your message goes here"></textarea>

                        <input type="submit" value="Submit" name="submit" className="gradient-btn"/>
                    </form>
                    <div className="send-success">Success!</div>
                    <div className="send-failure">Failure!</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
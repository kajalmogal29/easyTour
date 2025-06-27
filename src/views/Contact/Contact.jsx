import React from 'react'

//import Navbar from '../../components/Navbar/Navbar'
import './contact.css'
import Sociallinks from '../../components/Sociallinks/Sociallinks.jsx'

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="contact-main-container">
        <div className="contact-header">
            <p> <b className="heading">Get in Touch With Us </b><br></br>
            Have a Questions ? We're here to help !</p>
        </div>
        <div className="contact-content">
          <div className="enquiry-form">
            <form>

              <input type="text" id="name" name="name" placeholder="Your Name" className="user-input" required />
              <br></br>
              
              <input type="email" id="email" name="email" placeholder="Your Email" className="user-input" required />
              <br></br>

              <select id="inquiry-type" name="inquiry-type" className="user-input" required>
                <option value="" disabled selected>Select Inquiry Type</option>
                <option value="general">General Inquiry</option>
                <option value="booking inquiry">Booking Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
              <textarea id="message" name="message" placeholder="Your Message" className="user-input" required></textarea>
              <br></br>
              
              <button type="submit" >Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-information">
              <h2>Contact Information</h2><br></br>
              <h3>EasyTour</h3>
              <div><i class="ri-phone-line"></i> 1234567890</div>
              <div><i class="ri-mail-line"></i>easytour32@gmail.com</div>
              <p>Follow Us : </p>
            
             <Sociallinks />

              <p>Support Hours :</p>
              <p>Monday-Friday : 9:00 AM - 3:00 PM </p>
              <p>Saturday-Sunday : 10:00 AM - 4:00 PM</p>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
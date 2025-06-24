import React from 'react'
import "./about.css"
import img1 from "../../assets/pic1.jpeg"
import img2 from "../../assets/pic2.jpeg"
import img3 from "../../assets/pic3.jpeg"
import img4 from "../../assets/pic4.jpeg"

const About = () => {
  return (
    <>
    <div className="home-container">
      <div className="top-section">
        <span><h2>Your perfect vacation</h2></span>
        <p>Get Relaxed</p>
        <button>More Discover</button>
      </div>
    <div className="mid-section">
      <div className="tagline">Perfect Holidays</div>

      <div className="mid-container">
        <div>
          <img src={img1}></img>
        </div>

        <div>
          <img src={img2}></img>
        </div>

        <div>
          <img src={img4}></img>
        </div>

        <div>
          <img src={img3}></img>
        </div>
        
      </div>
       <div className="bottom-section">
          <h2>Why Choose us?</h2>

        <div className="setting-pannel">

          <div className="feature">
            <div className="icon-style"><i class="ri-thumb-up-fill"></i></div>
          </div>

          <div className="feature">
            <div className="icon-style"><i class="ri-money-rupee-circle-line"></i></div>
          </div>

          <div class="feature">
            <div className="icon-style"><i class="ri-snowflake-line"></i></div>
          </div>

          <div className="feature">
           <div className="icon-style"> <i class="ri-checkbox-circle-line"></i></div>
            </div>

        </div>
      </div>
    </div>
    </div>

    <div className="end-container">
      <div className="description">
        <h2>About Us...!</h2>
          <div id="about-section">
            <p>TIME TO TRAVEL.,Chennai-NCR based Tour Company,founded in 2010
            dedicated to provide inbound travel services and 
            hospitality.</p>
            <p>Years of experience added with creative tour packages and 
            thousands of satisfied clients have made us one of the 
            leading tour companies in Indai.</p>
            <p>Our philosophy stems from
            an old adage-leaving no stone unturned-which makes us 
            reputable in Tamilnadu tour and travel circles.</p>
            <p>We are a Team of passionate travel & technology 
            experts dedicated to revolutionizing the tourism 
            industries.</p>
            <p>We believe in providing innovative solutions 
            that empower businesses to thrive. </p>
            
          </div>
          <div className="middle-part">
          <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609897945!2d72.7410997620409!3d19.082197839933396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b2ddffb1d%3A0xf1c4a9aee0e4f9f7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687144879323!5m2!1sen!2sin" width="500" height="100%"></iframe>
        </div>
        <div className="location-pannel">
          <div className="title"><i class="ri-plane-fill"></i> Knoor Travel Agency <i class="ri-plane-fill"></i></div>

          <div id="loc-title"><h3><i class="ri-map-pin-fill"></i> Location :</h3>
            <p>C-241,Baker Street,Rajpath Road Mumbai</p>
          </div>
         <div className="contact-section">
          <h4><i class="ri-phone-fill"></i> Contact Us for More Details..</h4>
             <div id="num-sec">
              <p>contact@yourname.com</p>
              5557771234
             </div>
         </div>
          
        </div>

        <div className="additional-data">
          <h2>Explore More Features !</h2>
          <div id="feature-data">
            <p> <i class="ri-gemini-fill"></i>Online Booking & Payment Processing.</p>
            <p> <i class="ri-gemini-fill"></i>Tour Package Management.</p>
            <p> <i class="ri-gemini-fill"></i>Customer Relationship Mangement.</p>
            <p> <i class="ri-gemini-fill"></i>Inventory Management.</p>
            <p> <i class="ri-gemini-fill"></i>Reporting & Analytics.</p>
          </div>
        </div>
        </div>
      <div id="footer-pannel">
          <div><i class="ri-copyright-line"></i> 2022 Knoor- Tours & Travels Booking Elementor Terms.</div>

          <div className="icons">
            <div><i class="ri-facebook-circle-fill"></i></div>
            <div><i class="ri-instagram-line"></i></div>
            <div><i class="ri-twitter-fill"></i></div>
            <div><i class="ri-github-fill"></i></div>
          </div>
      </div>
          
      </div>
      
    </div>
  </>
  )
}

export default About;
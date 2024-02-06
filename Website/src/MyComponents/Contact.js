import React from 'react'
import phone1 from "../Images/phone1.jpg";
import mail from "../Images/mail.png";
import add from "../Images/add.png";
import "./Contact.css"
import { Footer } from './Footer'

const Contact = () => {
  return (
    
    <div>
    <div className="contact-info">
      <div className="container-fluid">
      <div className="contact_form">
      <div className ="container">
        <div className ="row">
          <div className = "col-lg-50 offset-lg-10">
            <div className = "contact_form_container">
              <div className ="contact_form_title">
                Get in Touch
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_info_item d-flex justify-content-start align-items-center ">
              <img className = "phone" src={phone1} alt="phone" />
              <div className="contact_info_content">
                   <div className="contact_info_title">
                    Phone
                   </div>
                   <div className="contact_info_text">
                    +911101456755
                   </div>
              </div>

            </div>

            

            <div className="contact_info_item d-flex justify-content-start align-items-center ">
              <img className = "phone" src={mail} alt="phone" />
              <div className="contact_info_content">
                   <div className="contact_info_title">
                    Mail
                   </div>
                   <div className="contact_info_text">
                    nitikadevgan@gmail.com
                   </div>
                   <textarea className="form-control" rows="5" ></textarea>
                   <input className = "btn"  type ="submit"  />
              </div>
              
            </div>
            <div className="contact_info_item d-flex justify-content-start align-items-center ">
              <img className = "phone" src={add} alt="phone" />
              <div className="contact_info_content">
                   <div className="contact_info_title">
                    Address
                   </div>
                   <div className="contact_info_text">
                    E-145,Kalkajii
                    
                   </div>
                   
              </div>
              
            </div>

           

          </div>
        </div>
        <Footer/>
      </div>
     
    </div>
    
    
     
    </div>
    
    
  
  )
}

export default Contact
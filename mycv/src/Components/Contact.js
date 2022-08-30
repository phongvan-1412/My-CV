import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

class Contact extends Component {
    state={
        contacts: [
            {
                contacts_icon: "fa fa-map",
                contacts_title: "Address Point",
                contacts_content: "Phu My Thuan Apartment, Huynh Tan Phat Str, HCM city, Viet Nam"
            },
            {
                contacts_icon: "fa fa-envelope-open",
                contacts_title: "Mail Me",
                contacts_content: "bichvanphamnguyen1412@gmail.com"
            },
            {
                contacts_icon: "fa fa-phone-square",
                contacts_title: "Call Me",
                contacts_content: "+84902450647"
            }
        ]
    }
    render(){
        return(
            <div className="container-fluid contact-wrapper" 
                 data-aos="fade-up"
                 data-aos-duration="1200">
                    <div className="contact-title-section text-left text-sm-center">
                        <h1>get in
                            <span> touch</span>
                        </h1>
                        <span className="contact-title-bg">Contact</span>
                    </div>
    
                    <div className="container contact-main-content">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <h3 className="text-uppercase mb-0 ft-wt-600 pb-3 contact-custom-title">Don't be shy!</h3>
                                <p className="mb-4" style={{color: "#fff"}}>
                                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>

                                {this.state.contacts.map((contact, index) => {
                                    return(
                                        <p className="position-relative contact-custom-span" key={index}>
                                            <i className={contact.contacts_icon}></i>
                                            <span className="d-block">{contact.contacts_title}</span>
                                            {contact.contacts_content}
                                        </p>
                                    )
                                })}
                            </div>
                            
                            <div className="col-12 col-lg-8">
                                <form id="myForm" className="contact-form">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                       name="name"
                                                       placeholder="YOUR NAME"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input type="email" 
                                                    name="user_email"
                                                    placeholder="YOUR EMAIL"
                                                    required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="subject"
                                                    placeholder="YOUR SUBJECT"
                                                    required/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    placeholder="YOUR MESSAGE"
                                                    required>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="button-contact">
                                                <span className="button-contact-text">Send Message</span>
                                                <span className="button-contact-icon fa fa-send"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        ) 
    }
    
}

export default Contact;
import React from "react";

import '../styles/contact/contact.css';

const Contact = () => {
  return (
    <section className="section sec5 sec contact" id="contact">
        <div className="main-title">
            <h2>Contact <span>me</span> <span className="bg-text"> Contacts</span></h2>
        </div>
        <div className="container-con">
            <div className="container">
                <div className="contactInfo">
                    <div>
                        <h2>My Contacts</h2>
                        <ul className="info">
                            <li>
                                <span><i className='bx bx-current-location'></i></span>
                                <span>Nairobi, Kenya</span>
                            </li>
                            <li>
                                <span><i className='bx bxl-gmail'></i></span>
                                <span>oritorichie2@gmail.com</span>
                            </li>
                            <li>
                                <span><i className='bx bxs-phone-call'></i></span>
                                <span>+254 711 600 131</span>
                            </li>
                            <li>
                                <span><i className='bx bx-home'></i></span>
                                <span>P.O box 00100-68882 <br />
                                    Nairobi, Kenya <br />
                                    Street G.P.O
                                </span>
                            </li>
                        </ul>
                    </div>
                    <ul className="socials">
                        <li><a href="https://www.linkedin.com/in/richie-orito/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a></li>
                        <li><a href="https://www.instagram.com/riisherd.otto/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a></li>
                        <li><a href="https://twitter.com/HostWarm" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a></li>
                        <li><a href="https://github.com/RichieOrito" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a></li>
                    </ul>
                </div>
                <div className="contactForm">
                    <h2>Send a Message</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea required></textarea>
                            <span>Write your message here..</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;

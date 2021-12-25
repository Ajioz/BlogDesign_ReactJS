import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

export default function Contact() {
    return (
        <>
            <body>
                <div className="cleanup"></div>
                <section id="contact">
                    <div classNameName="socialIcon">
                        <i className="Icon fab fa-facebook-f"></i>
                        <i className="Icon fab fa-twitter"></i>
                        <i className="Icon fab fa-instagram"></i>
                        <i className="Icon fa fa-whatsapp"></i>
                        <i className="Icon fab fa-linkedin"></i>
                    </div>
                    <div className="contact-box"> 
                        <div className="c-heading">
                            <h1>Get in Touch</h1>
                            <p>Call or Email Us Regarding Your Need or Issue</p>
                        </div>   
                        <div className="c-inputs">
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="email@gmail.com" />
                            <textarea name="message" placeholder="Write Message"></textarea>
                            <button>Send</button>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1559781930905!2d5.767362914447658!3d5.543876835313656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad782b8d9877%3A0x83fa1d7e0ba43554!2s33%20Airport%20Road%2C%20Warri%20330102%2C%20Warri!5e0!3m2!1sen!2sng!4v1638357357662!5m2!1sen!2sng" style={{border:"0",  width:'600px', height:"450px"}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </section>
            </body>
        </>
    )
}

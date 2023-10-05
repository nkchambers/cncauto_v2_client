import ContactForm from "../../components/contactForm/ContactForm";
import contactForm_seattleBackground from "../../assets/contact_img/contactForm_seattleBackground.jpg";
import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (

            <div className="contactContainer py-32"> 
                <img 
                    className="contactBackground"
                    src={contactForm_seattleBackground} 
                    alt="Night time arial view of Seattle, WA" 
                />

                <ContactForm />
            </div>
    )
}

export default Contact;
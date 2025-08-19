import React from "react";
import "../styles/Contact.css";
import Footer from "../components/Footer";

const Contact =() =>{
    return (
        <>
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us </h2>
                <p className="contact-subtitle">
          Have questions or want to plan your next trip with us? 
          Feel free to reach out – we’d love to hear from you!
                </p>

                < div className="contact-grid">
                < div className="contact-info">
                <h3>Get in Touch</h3>
                <p><strong>Email:</strong> info@travellanka.com</p>
                <p><strong>Phone:</strong> +94 123 456 789</p>
                <p><strong>Address:</strong> 123 Travel Lane, Colombo, Sri Lanka</p>
                </div>

                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};
 
export default Contact;
import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact-container">
        <div className="contact-wrapper">
            <div className="contact-left"></div>
            <div className="contact-right">
                <h3>Contact Me!</h3>
                <form className="contact-form">
                    <div className="input-group">
                        <input type="text" id="firstName" className="field" required />
                        <label for="name" className="field-label">Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" className="field" required />
                        <label for="email" className="field-label">E-mail</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" className="field" required></textarea>
                        <label for="message" className="field-label">Message</label>
                    </div>
                    <button type="submit" className="btn-submit">Submit!</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
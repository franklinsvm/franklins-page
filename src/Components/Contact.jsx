import React, {useState} from 'react'
import "./Contact.css"

const Contact = () => {
    
    const [btnSubmit, setBtnSubmit] = useState("btn-submit")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageSubmit, setMessageSubmit] = useState("Submit!")



    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnSubmit("btn-submitted");
        setFirstName("");
        setEmail("");
        setMessage("");
        setMessageSubmit("Submitted!")
    }

    return (
    <div className="contact-container" id="contact-id">
        <div className="contact-wrapper">
            <div className="contact-left"></div>
            <div className="contact-right">
                <h3>Contact Me!</h3>
                <p>Not yet linked to a server. Just for demonstrative purpose.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" id="firstName" className="field" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <label for="name" className="field-label">Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" className="field" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label for="email" className="field-label">E-mail</label>
                    </div>
                    <div className="input-group">
                        <textarea id="message" className="field" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <label for="message" className="field-label">Message</label>
                    </div>
                    <button type="submit" className={`${btnSubmit} btn-sub`} >{messageSubmit}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {

    const form = useRef();

    const notifySuccess = () => toast.success("Email successfully sent!");
    const notifyError = () => toast.error("Cannot send email. Try again.");

    const [message, setMessage] = useState('');

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const preventEmptyEmail = (e) => {
        notifyError();
        e.preventDefault();
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jdee253', 'template_f5axtdc', form.current, 'iOUt_nmv1rgQLIaz1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div className='Contact'>
            <h1>Contact me</h1>
            <h3>Get in touch, send me an email now!</h3>
            <h3>Or contact me through <a href='https://www.linkedin.com/in/jose-antonio-lopes-paiva-junior' target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href='https://github.com/JoseAntonio5' target="_blank" rel="noopener noreferrer">GitHub</a>!</h3>

            <div className='Contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type="text" id="user_name" name="user_name" onChange={handleChange} />
                    <label>Email:</label>
                    <input type="email" id="user_email" name="user_email" onChange={handleChange} />
                    <label>Message:</label>
                    <textarea name="message" id="message" onChange={handleChange} />
                    <input 
                    type="submit" 
                    value="Send" 
                    onClick={message.trim().length !== 0 ? notifySuccess : preventEmptyEmail} />
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Contact;
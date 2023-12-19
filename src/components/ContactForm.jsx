import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '@/styles/contactForm.module.css';

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields must be filled out");
      return;
    }

    emailjs.sendForm('service_rr12m3q', 'template_hv656kl', form.current, '2Pg_QENVYuxD8e3ur')
      .then((result) => {
        alert("Email successfully sent")
        resetForm();
      }, (error) => {
        console.log("Send email error:", error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={style.contactFormContainer}>
        <div className={style.innerContainer}>
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange}
            id='inputName'
          />
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange}
            id='inputEmail'
          />
        </div>
        <div className={style.messageContainer}>
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange}
            id='inputMessage'
          />
        </div>
        <div className={style.buttonContainer}>
          <input type="submit" value="Send" className="button"/>
          <input type="button" value="Reset" className="button" onClick={resetForm}/>
        </div>
      </div>
    </form>
  );
}

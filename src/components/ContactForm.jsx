import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '@/styles/inputForm.module.css';

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
    <form ref={form} onSubmit={sendEmail} className={style.inputFormContainer}>
          <input 
            placeholder="Your Name"
            name='name'
            type="text" 
            value={formData.name} 
            onChange={handleInputChange}
            id='inputName'
          />
          <input 
            placeholder="Your Email"
            type="email"  
            name='email'
            value={formData.email} 
            onChange={handleInputChange}
            id='inputEmail'
          />
          <textarea 
            placeholder="Message" 
            name='message'
            value={formData.message} 
            onChange={handleInputChange}
            id='inputMessage'
          />
        <div className={style.buttonContainer}>
          <button type="submit" value="Send" className="button">Send</button>
          <button type="button" value="Reset" className="button" onClick={resetForm}>Reset</button>
        </div>
    </form>
  );
}

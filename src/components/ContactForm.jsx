import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '@/styles/contactForm.module.css'
import { Megrim } from 'next/font/google';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let message = document.getElementById('inputMessage').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (name === '' || email === '' || message === '') {
        alert("All fields must be filled out");
        return;
    }

    emailjs.sendForm('service_rr12m3q', 'template_hv656kl', form.current, '2Pg_QENVYuxD8e3ur')
      .then((result) => {
          console.log("Email sent:", result.text);
          document.getElementById('inputName').value = '';
          document.getElementById('inputEmail').value = '';
          document.getElementById('inputMessage').value = '';
      }, (error) => {
          console.log("Send email error:", error.text);
      });
};

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={style.contactFormContainer}>
        <div className={style.innerContainer}>
          <label>Name</label>
          <input type="text" name="from_name" id='inputName'/>
          <label>Email</label>
          <input type="email" name="from_email" id='inputEmail'/>
        </div>
          <div className={style.messageContainer}>
            <label>Message</label>
            <textarea name="message" id='inputMessage' />
        </div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};
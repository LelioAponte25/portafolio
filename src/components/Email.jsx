import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './styles/Email.css'



const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ykm2ots', 'template_4acpg9p', form.current, 'H28cCygNsrMOZSA1M')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
    <h1>FORMULARIO DE CONTACTO</h1>
      <div>
        <form ref={form} onSubmit={sendEmail} className='field'>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>

  )
}

export default Email
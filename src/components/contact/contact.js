import emailjs from 'emailjs-com';
import React from 'react';
import './contact.css';
import Contact_img from './contact_img.png'
// import Contact_bg from './Vector.png'

export default function contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_v5hkbdd', 'template_bq9ayjv', e.target, 'eiifzSX7EirOVAXJk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className='contact'>
      <h1 className='text-center py-3'>Contact Us</h1>
      <div className='contact-body d-flex justify-content-evenly'>
        <div className='contact-img'>
          <img src={Contact_img} alt='contact-img' width='600px' height='500px' />
        </div>
        <div className='contact-form d-flex'>
          <form onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <input className='input_field' type="text" name="from_name" placeholder='Name' /><br />
            {/* <label>Email</label> */}
            <input className='input_field' type="email" name="user_email" placeholder='Email' /><br />
            {/* <label>Message</label> */}
            <textarea className='input_field' name="message" placeholder='Message' rows='4'/><br />
            <div className='d-flex justify-content-evenly sendBtn'><input type="submit" value="Send" /></div>
          </form>
        </div>
      </div>
      <div className='bg'>

      </div>
    </div>
  )
}

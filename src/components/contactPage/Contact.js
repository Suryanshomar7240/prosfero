import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <section id='contact'>
        <div className='contact-box'>
          <div className='contact-links'>
            <h2 id='contact-h2' style={{color:"white"}}>CONTACT US</h2>
          </div>
          <div className='contact-form-wrapper'>
            <form>
              <div className='form-item'>
                <label>Name:</label>
                <input type='text' name='sender' required />
              </div>
              <div className='form-item'>
                <label>Email:</label>
                <input type='text' name='email' required />
              </div>
              <div className='form-item'>
                <label>Message:</label>
                <textarea className='' name='message' required></textarea>
              </div>
              <button className='submit-btn'>Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

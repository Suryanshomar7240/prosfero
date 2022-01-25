import React, { useState } from 'react';
import './contact.css';
import { send, init } from 'emailjs-com';
const Contact = () => {
  const [data, SetData] = useState({
    sender: '',
    email: '',
    message: '',
  });
  init('user_36SNYbq8KaIwjEzuiv63F');
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
  };

  const sendmail = (e) => {
    e.preventDefault();

    send(
      'service_4nhy15e',
      'template_dnrtv93',
      data,
      'user_36SNYbq8KaIwjEzuiv63F'
    )
      .then((response) => {
        window.alert('Message sent successfully to Prosfero Team');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  return (
    <div>
      <section id='contact'>
        <div className='contact-box'>
          <div className='contact-links'>
            <h2 id='contact-h2' style={{ color: 'white' }}>
              CONTACT US
            </h2>
          </div>
          <div className='contact-form-wrapper'>
            <form>
              <div className='form-item'>
                <label>Name:</label>
                <input
                  type='text'
                  name='sender'
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className='form-item'>
                <label>Email:</label>
                <input
                  type='text'
                  name='email'
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className='form-item'>
                <label>Message:</label>
                <textarea
                  className=''
                  name='message'
                  onChange={handleInputs}
                  required
                ></textarea>
              </div>
              <div className='submit-btn' onClick={sendmail}>
                Send
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

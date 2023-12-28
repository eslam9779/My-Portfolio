import React, { useState } from 'react'
import './contacts.css'
import axios from 'axios';

const Contacts = () => {

  const myContacts = [
    {
      Header: "Address",
      content: "Faisal street , Giza, Egypt",
      icon: "home"
    },
    {
      Header: "Call Me",
      content: "01017392616",
      icon: "call"
    }, {
      Header: "Email Me",
      content: "eslamabdo9779@gmail.com",
      icon: "mail"

    }, {
      Header: "Open Hours ",
      OpenDays: "Saturday-thursday",
      OpenHours: "8:00AM-8:00PM",
      icon: "schedule"

    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post('http://localhost:3001/send-email', formData);

      if (response.status === 200) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='contact section__padding ' id='Contact' >
      <div className="container section-title " data-aos="fade-up">
        <h2 className='gradient__text'>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-lg-6">

            <div className="row gy-4">
              {myContacts.map((item, index) =>

                <div className="col-md-6 text-white" key={index}>
                  <div className="info-item" >
                    <span className="material-symbols-outlined" style={{ fontSize: "40px", color: "white" }}>{item.icon}</span>
                    <h3 className='gradient__text'>{item.Header}</h3>
                    <p>{item.content}</p>
                    <p>{item.OpenDays}</p>
                    <p>{item.OpenHours}</p>
                  </div>
                </div>
              )}

            </div>

          </div>

        
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contacts

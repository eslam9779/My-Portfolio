import React, { useRef, useState } from 'react'
import './contacts.css'
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';

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
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef(null);

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    try {
      const response = await axios.post('https://contact-form-api-dlbe.onrender.com/submit-form', formData);

      if (response.status === 200) {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Sent Successfully', life: 3000,
        style: {padding:"15px"}});
        setFormData({ name: '', email: '', subject: '', message: '' });

      } else {
        toast.current.show({severity:'error', summary: 'Error', detail:'Fail to Send message', life: 3000, style: {padding:"15px"}});
      }
    } catch (error) {
      toast.current.show({severity:'error', summary: 'Error', detail:'Fail to Send message', life: 3000, style: {padding:"15px"}});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
          <Toast ref={toast}   />

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
                  {isLoading ? (
                    <ProgressSpinner />
                  ) : (
                    <button type="submit">Submit Form</button>
                  )}
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>
    </>

  )

}

export default Contacts

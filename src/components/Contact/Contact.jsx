import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="contact-label" htmlFor="name">Name:</label>
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="email">Email:</label>
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="message">Message:</label>
            <textarea
              className="contact-textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
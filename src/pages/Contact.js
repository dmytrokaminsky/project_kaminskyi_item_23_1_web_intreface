import React from 'react';
import picture1 from '../image.png';

function Contact() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contact Information</h1>
      <p>Welcome to our organization! Here is our contact information:</p>

      <div className="contact-cards" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="contact-card">
          
          <h2>Director</h2>
          <p>Email: contact@gmail.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="contact-card">
          
          <h2>Manager</h2>
          <p>Email: contact@gmail.com</p>
          <p>Phone: 987-654-3210</p>
        </div>

        <div className="contact-card">
          
          <h2>Accountant</h2>
          <p>Email: contact@gmail.com</p>
          <p>Phone: 555-555-5555</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
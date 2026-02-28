import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* قسم العنوان */}
      <section style={{ backgroundColor: '#1d3557', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>We are here to support your journey with RevealIQ</p>
      </section>

      {/* نموذج التواصل البسيط */}
      <section style={{ padding: '60px 10%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ 
          maxWidth: '600px', 
          width: '100%', 
          backgroundColor: '#f8f9fa', 
          padding: '40px', 
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ color: '#1d3557', marginBottom: '20px' }}>Send us a message</h3>
          <p><strong>Email:</strong> support@revealiq.com</p>
          <p><strong>Phone:</strong> +1 (555) 000-1234</p>
          <p><strong>Address:</strong> Tech Hub, Innovation District</p>
          
          <div style={{ marginTop: '30px', padding: '15px', borderLeft: '4px solid #45b39d', backgroundColor: '#eef9f7' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
              Our support team is available 24/7 to assist with platform integration and AI reporting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
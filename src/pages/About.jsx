import React from 'react';

const About = () => {
  const sectionStyle = { padding: '60px 10%', textAlign: 'center' };
  const cardContainer = { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' };
  const cardStyle = { padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '15px', width: '300px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: '#1d3557', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>About RevealIQ</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '20px auto' }}>
          Empowering organizations through AI-driven talent intelligence and competency mapping.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section style={sectionStyle}>
        <div style={cardContainer}>
          <div style={cardStyle}>
            <h3 style={{ color: '#45b39d' }}>Our Vision</h3>
            <p>To be the leading global PaaS for human potential discovery and empowerment.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: '#45b39d' }}>Our Mission</h3>
            <p>Providing data-backed insights to align talent with market demands through innovative assessment tools.</p>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section style={{ ...sectionStyle, backgroundColor: '#fdfdfd' }}>
        <h2 style={{ color: '#1d3557', marginBottom: '40px' }}>Platform Objectives</h2>
        <ul style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto', lineHeight: '2' }}>
          <li> Establish trust and credibility in digital talent markets.</li>
          <li> Provide clear positioning of RevealIQ solutions.</li>
          <li> Deliver comprehensive reporting for better decision making.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
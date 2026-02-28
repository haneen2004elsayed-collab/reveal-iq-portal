import React from 'react';

const Solutions = () => {
  const cardStyle = {
    padding: '30px',
    border: '1px solid #eee',
    borderRadius: '12px',
    width: '300px',
    textAlign: 'left',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <section style={{ backgroundColor: '#f4f7f6', padding: '80px 10%', textAlign: 'center' }}>
        <h1 style={{ color: '#1d3557', fontSize: '2.5rem' }}>Our AI Solutions</h1>
        <p style={{ color: '#666', maxWidth: '700px', margin: '20px auto' }}>
          Cutting-edge tools designed to revolutionize talent acquisition and competency mapping.
        </p>
      </section>

      <section style={{ padding: '60px 10%', display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* POSSA Tool */}
        <div style={cardStyle}>
          <h3 style={{ color: '#45b39d' }}>POSSA</h3>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            AI-powered Psychometric Assessment for deep behavioral insights and cultural fit.
          </p>
        </div>

        {/* POSSE Tool */}
        <div style={cardStyle}>
          <h3 style={{ color: '#45b39d' }}>POSSE</h3>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            Advanced Competency Mapping to align individual skills with organizational goals.
          </p>
        </div>

        {/* AI Reporting */}
        <div style={cardStyle}>
          <h3 style={{ color: '#1d3557' }}>AI Insights</h3>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            Comprehensive automated reports providing data-backed hiring recommendations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
import React from 'react';

const Home = () => {
  return (
    <div className="home-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* 1. Hero Section - صفحة 8 في الملف */}
      <section style={{ 
        padding: '120px 20px', 
        backgroundColor: '#1d3557', // اللون الكحلي الرسمي من الشعار
        color: 'white', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Reveal Human Potential</h1>
        <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Empowering performance in a digitally evolving labor market through talent intelligence.
        </p>
        <button style={{ 
          padding: '15px 40px', 
          fontSize: '1.1rem', 
          backgroundColor: '#45b39d', // اللون الأخضر المائي من الشعار
          border: 'none', 
          borderRadius: '50px', 
          color: 'white', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Get Started
        </button>
      </section>

      {/* 2. Features Highlights - صفحة 9 في الملف */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', color: '#1d3557', marginBottom: '50px' }}>Core Solutions</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* Box 1: Soft Skills */}
          <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#45b39d' }}>Soft Skills (POSSA)</h3>
            <p>Comprehensive assessment and organizational development solutions.</p>
          </div>
          {/* Box 2: AI Reports */}
          <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#45b39d' }}>Empowerment (POSSE)</h3>
            <p>Training paths designed to reveal and empower human potential.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
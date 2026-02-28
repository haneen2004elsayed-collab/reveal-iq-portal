import React from 'react';

const Header = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 5%',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#1d3557' }}>
        Reveal<span style={{ color: '#45b39d' }}>IQ</span>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0 }}>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Solutions</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
      </ul>
      <button style={{
        padding: '8px 20px',
        backgroundColor: '#1d3557',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>EN/AR</button>
    </nav>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = { textDecoration: 'none', color: '#333', fontWeight: '500' };

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '15px 5%', backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      position: 'sticky', top: 0, zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#1d3557' }}>
        Reveal<span style={{ color: '#45b39d' }}>IQ</span>
      </div>

      <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/solutions" style={linkStyle}>Solutions</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>

      <button style={{
        padding: '8px 20px', backgroundColor: '#1d3557', color: 'white',
        border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
      }}>EN/AR</button>
    </nav>
  );
};

export default Header;
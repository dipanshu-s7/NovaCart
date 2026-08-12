import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/NovaCartLogo.png"
        alt="NovaCart"
        style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', border: '4px solid #f97316', marginBottom: '20px', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)' }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About NovaCart</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Developed by Deepanshu Suryavanshi</h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        NovaCart is a full-stack MERN e-commerce platform built as a personal portfolio project. It demonstrates
        authentication, cart management, order processing, admin dashboards, and payment integration in a
        production-ready architecture.
      </p>
    </div>
  );
};

export default About;

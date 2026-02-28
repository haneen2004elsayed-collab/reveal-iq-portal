import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      color: '#333'
    }}>
      <h1>Reveal IQ - الصفحة الرئيسية</h1>
      <p>هذا الملف مستقل (Independent Component) وجاهز للعمل على الكومبونانتس.</p>
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <span>حالة القسم: 🟢 جاهز للمراجعة</span>
      </div>
    </div>
  );
};

export default Home;
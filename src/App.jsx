import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Terminal, ArrowRight, Activity, Globe, Menu } from 'lucide-react';

function App() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* Navbar متجاوب */}
      <nav style={{ padding: '2vh 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', background: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(15px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: 'clamp(40px, 5vw, 50px)', height: 'clamp(40px, 5vw, 50px)', backgroundColor: '#38bdf8', borderRadius: '12px', display: 'grid', placeItems: 'center' }}>
            <Activity size={28} color="#020617" />
          </div>
          <h1 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: '800', letterSpacing: '2px', margin: 0, background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>REVEAL IQ</h1>
        </div>
        
        {/* زر الدخول يختفي في الشاشات الصغيرة جداً ليوفر مساحة */}
        <button style={{ backgroundColor: '#38bdf8', color: '#020617', border: 'none', padding: '12px 25px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Portal</button>
      </nav>

      {/* Hero Section - الخط يكبر ويصغر حسب الشاشة */}
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10vh 5vw' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', maxWidth: '1400px' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 7rem)', // حجم مرن جداً
            marginBottom: '30px', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            letterSpacing: '-3px' 
          }}>
            Visual Intelligence <br /> 
            <span style={{ color: '#38bdf8' }}>Redefined</span>
          </h2>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: 'clamp(1.1rem, 2vw, 1.8rem)', 
            maxWidth: '900px', 
            margin: '0 auto 60px', 
            lineHeight: '1.6' 
          }}>
            Establishing the core neural infrastructure for RevealIQ. Real-time monitoring, 
            enterprise security, and global data synchronization.
          </p>
        </motion.div>

        {/* Grid Section - يترتب تلقائياً (3 أعمدة في اللابتوب، عمود واحد في الموبايل) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
          gap: '30px', 
          width: '100%', 
          maxWidth: '1600px'
        }}>
          <BigCard icon={<Cpu size={40} color="#38bdf8" />} title="Neural AI" desc="Processing visual streams with sub-millisecond latency." />
          <BigCard icon={<Shield size={40} color="#38bdf8" />} title="Security" desc="Quantum-resistant encryption for your sensitive data." />
          <BigCard icon={<Globe size={40} color="#38bdf8" />} title="Scale" desc="Deploy globally across distributed cloud networks." />
        </div>
      </main>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#475569', fontSize: '1rem' }}>
        <p>© 2026 RevealIQ Systems. All Systems Responsive.</p>
      </footer>
    </div>
  );
}

function BigCard({ icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -10, backgroundColor: '#111827' }}
      style={{ 
        backgroundColor: '#0f172a', 
        padding: 'clamp(30px, 5vw, 60px)', 
        borderRadius: '30px', 
        border: '1px solid #1e293b', 
        cursor: 'pointer',
        transition: '0.3s'
      }}
    >
      <div style={{ marginBottom: '20px' }}>{icon}</div>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: 'bold' }}>{title}</h3>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.5' }}>{desc}</p>
    </motion.div>
  );
}

export default App;
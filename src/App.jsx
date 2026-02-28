import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions' // استيراد صفحة الحلول الجديدة
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* الهيدر يظهر في كل الصفحات */}
        <Header /> 
        
        <Routes>
          {/* مسار الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />
          
          {/* مسار صفحة من نحن */}
          <Route path="/about" element={<About />} />
          
          {/* مسار صفحة الحلول (POSSA & POSSE) */}
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
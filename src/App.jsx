import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import About from './Pages/About'
import SocialMediaMarketing from './services-components/SocialMediaMarketing'
import DigitalMarketing from './services-components/DigitalMarketing'
import WebDevelopment from './services-components/WebDevelopment'
import BrandIdentity from './services-components/BrandIdentity'
import SEOServices from './services-components/SEOservices'
import BlogHub from './Pages/BlogHub'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Check if splash screen has been shown in this session
    return !sessionStorage.getItem('splashScreenShown')
  })

  const handleSplashComplete = () => {
    setShowSplash(false)
    // Mark splash screen as shown for this session
    sessionStorage.setItem('splashScreenShown', 'true')
  }

  return (
      <>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <BrowserRouter>
          <Routes>
            {/* Main Pages Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bloghub" element={<BlogHub />} />

            {/* Services Routes */}
            <Route path="/services/social-media-marketing/" element={<SocialMediaMarketing />} />
            <Route path="/services/digital-marketing/" element={<DigitalMarketing />} />
            <Route path="/services/web-development/" element={<WebDevelopment />} />
            <Route path="/services/brand-identity/" element={<BrandIdentity />} />
            <Route path="/services/seo-services/" element={<SEOServices />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App

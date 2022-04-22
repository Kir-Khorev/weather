import React, { useState, useEffect, useRef } from 'react';
import clouds from 'vanta/dist/vanta.clouds.min';
import './App.css';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import Auth0ProviderWithHistory from '../../auth0Provider';

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(clouds({
        el: myRef.current,
        size: 1.0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Auth0ProviderWithHistory>
      <div>
        <div className='App' ref={myRef} >
          <MainContent />
        </div>
        <Footer />
      </div>
    </Auth0ProviderWithHistory>
  )

}

export default App;

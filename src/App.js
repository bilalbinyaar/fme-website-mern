import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css';
import siteLogo from '../src/assests/site-logo.png';
import Banner from './components/Banner';
import Data from './components/Data';
import SignalGeneration from './components/SignalGeneration';
import Backtest from './components/Backtest';
import Optimization from './components/Optimization';
import PortfolioAllocation from './components/PortfolioAllocation';
import Execution from './components/Execution';
import Footer from './components/Footer';

function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    position: isSticky ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '50px',
    zIndex: 100,
    backgroundColor: isSticky ? '#ffffff' : 'transparent',
    boxShadow: isSticky ? '0px 3px 10px 0px #2b2b2b27' : 'none',
    transition: 'box-shadow 0.5s ease-in-out',
  };
  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    const yOffset = -50;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      scrollTimingFunction: 'ease-in-out',
      scrollDuration: 5000,
    });
  };
  return (
    <React.Fragment>
      <div>
        <div className="sticky-nav" style={headerStyle}>
          <nav className="navbar">
            <div className="site-logo" onClick={() => scrollToSection(0)}>
              <img src={siteLogo} className="logo" alt="logo" />
            </div>
            <div className="navbar-wrapper">
              <ul className="navbar-ul">
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(1)}>Data</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(2)}>
                    Signals Generation
                  </button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(3)}>Backtest</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(4)}>
                    Optimization
                  </button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(5)}>Execution</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(6)}>
                    Portfoilo Allocation
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* BODY SECTION */}
        <div ref={(ref) => (sectionRefs.current[0] = ref)}>
          <Banner />
        </div>
        <div ref={(ref) => (sectionRefs.current[1] = ref)}>
          <Data />
        </div>
        <div ref={(ref) => (sectionRefs.current[2] = ref)}>
          <SignalGeneration />
        </div>
        <div ref={(ref) => (sectionRefs.current[3] = ref)}>
          <Backtest />
        </div>
        <div ref={(ref) => (sectionRefs.current[4] = ref)}>
          <Optimization />
        </div>
        <div ref={(ref) => (sectionRefs.current[5] = ref)}>
          <Execution />
        </div>
        <div ref={(ref) => (sectionRefs.current[6] = ref)}>
          <PortfolioAllocation />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

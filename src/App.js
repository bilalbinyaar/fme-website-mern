import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css';
import siteLogo from '../src/assests/site-logo.png';

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
    const yOffset = -70;
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
            <div className="site-logo">
              <img src={siteLogo} className="logo" alt="logo" />
            </div>
            <div className="navbar-wrapper">
              <ul className="navbar-ul">
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(0)}>Section 1</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(1)}>Section 2</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(2)}>Section 3</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(3)}>Section 4</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(4)}>Section 5</button>
                </li>
                <li className="navbar-li">
                  <button onClick={() => scrollToSection(5)}>Section 6</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="height" ref={(ref) => (sectionRefs.current[0] = ref)}>
          <h2>Section 1</h2>
          <p>This is the content of section 1.</p>
        </div>
        <div className="height" ref={(ref) => (sectionRefs.current[1] = ref)}>
          <h2>Section 2</h2>
          <p>This is the content of section 2.</p>
        </div>
        <div className="height" ref={(ref) => (sectionRefs.current[2] = ref)}>
          <h2>Section 3</h2>
          <p>This is the content of section 3.</p>
        </div>
        <div className="height" ref={(ref) => (sectionRefs.current[3] = ref)}>
          <h2>Section 4</h2>
          <p>This is the content of section 4.</p>
        </div>
        <div className="height" ref={(ref) => (sectionRefs.current[4] = ref)}>
          <h2>Section 5</h2>
          <p>This is the content of section 5.</p>
        </div>
        <div className="height" ref={(ref) => (sectionRefs.current[5] = ref)}>
          <h2>Section 6</h2>
          <p>This is the content of section 6.</p>
        </div>
        <div className="height">
          <h2>Footer</h2>
          <p>This is the content of Footer.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import sideBarExe from '../assests/execute-side-bar.png';
import exeFeature from '../assests/exe-feature.png';
import e_1 from '../assests/e1.png';
import e_2 from '../assests/e2.png';
import e_3 from '../assests/e3.png';
import figure from '../assests/exe-figure.png';

const Execution = () => {
  return (
    <div className="execution">
      <div className="container">
        <div className="section-title">
          <h2>Execution</h2>
        </div>
        <div className="execution-wrapper">
          <div className="side-bar-data">
            <img src={sideBarExe} alt="side-bar" />
          </div>
          <div className="execution-content">
            <div className="execution-content-top">
              <div className="exe-content-top-items">
                <img src={e_1} alt="execution items" />
                <h3>Minimum Latency</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
              <div className="exe-content-top-items">
                <img src={e_2} alt="execution items" />
                <h3>Multiple Exchange </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
              <div className="exe-content-top-items">
                <img src={e_3} alt="execution items" />
                <h3>Support for Every Order type</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
            </div>
            <div className="execution-content-bottom">
              <div className="execution-content-bottom-left">
                <h2>We provide fastest, easiest, and most powerful platform</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
                <div className="exe-figure-shape">
                  <img src={figure} alt="figure shape" />
                </div>
              </div>
              <div className="execution-content-bottom-right">
                <div className="exe-feature-outter">
                  <img src={exeFeature} alt="feature" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execution;

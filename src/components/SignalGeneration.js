import React from 'react';
import sideBarSignals from '../assests/side-bar-signals.png';
import s_1 from '../assests/s-1.png';
import s_2 from '../assests/s-2.png';
import s_3 from '../assests/s-3.png';
import s_4 from '../assests/s-4.png';
import s_5 from '../assests/s-5.png';

const SignalGeneration = () => {
  return (
    <div className="signal">
      <div className="container">
        <div className="section-title signal-title">
          <h2>Signal Generation</h2>
        </div>
      </div>
      <div className="signals-divider"></div>
      <div className="container signal-main">
        <div className="signals-wrapper">
          <div className="side-bar-data">
            <img src={sideBarSignals} alt="side-bar" />
          </div>
          <div className="signals-content">
            <div className="signals-item">
              <div className="wiring-img">
                <img src={s_1} alt="extention" />
              </div>
              <div className="wiring-des">
                <h3>Techincal Indicators</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
            </div>
            <div className="signals-item">
              <div className="wiring-img">
                <img src={s_2} alt="extention" />
              </div>
              <div className="wiring-des">
                <h3>Time-Series Analsis</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
            </div>
            <div className="signals-item">
              <div className="wiring-img">
                <img src={s_3} alt="extention" />
              </div>
              <div className="wiring-des">
                <h3>Machine learning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
            </div>
            <div className="signals-item">
              <div className="wiring-img">
                <img src={s_4} alt="extention" />
              </div>
              <div className="wiring-des">
                <h3>Deep Learning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
            </div>
            <div className="signals-item">
              <div className="wiring-img">
                <img src={s_5} alt="extention" />
              </div>
              <div className="wiring-des">
                <h3>Custom Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultricies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalGeneration;

import React from 'react';
import sideBarData from '../assests/side-bar-data.png';
import bottomData from '../assests/bottom-data.png';
import d_1 from '../assests/d-1.png';
import d_2 from '../assests/d-2.png';
import d_3 from '../assests/d-3.png';
import d_4 from '../assests/d-4.png';
import d_5 from '../assests/d-5.png';

const Data = () => {
  return (
    <div className="data">
      <div className="container">
        <div className="section-title">
          <h2>Data</h2>
        </div>
        <div className="data-wrapper">
          <div className="side-bar-data">
            <img src={sideBarData} alt="side-bar" />
          </div>
          <div className="data-content">
            {/* ITEM 1 */}
            <div className="data-content-item">
              <div className="data-content-icon">
                <img src={d_1} alt="data-icon" />
              </div>
              <div className="data-content-description">
                <h3>Pricing(OHLC)</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultriciesLorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec vitae erat eu risus
                  varius ultricies
                </p>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="data-content-item">
              <div className="data-content-icon">
                <img src={d_2} alt="data-icon" />
              </div>
              <div className="data-content-description">
                <h3>Blockchain</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultriciesLorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec vitae erat eu risus
                  varius ultricies
                </p>
              </div>
            </div>
            {/* ITEM 3 */}
            <div className="data-content-item">
              <div className="data-content-icon">
                <img src={d_3} alt="data-icon" />
              </div>
              <div className="data-content-description">
                <h3>Social</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultriciesLorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec vitae erat eu risus
                  varius ultricies
                </p>
              </div>
            </div>
            {/* ITEM 4 */}
            <div className="data-content-item">
              <div className="data-content-icon">
                <img src={d_4} alt="data-icon" />
              </div>
              <div className="data-content-description">
                <h3>News</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultriciesLorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec vitae erat eu risus
                  varius ultricies
                </p>
              </div>
            </div>
            {/* ITEM 5 */}
            <div className="data-content-item">
              <div className="data-content-icon">
                <img src={d_5} alt="data-icon" />
              </div>
              <div className="data-content-description">
                <h3>Market</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vitae erat eu risus varius ultriciesLorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec vitae erat eu risus
                  varius ultricies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="data-bottom-square">
          <img src={bottomData} alt="bottom-data" />
        </div>
      </div>
    </div>
  );
};

export default Data;

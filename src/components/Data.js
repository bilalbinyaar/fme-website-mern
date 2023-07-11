import React from 'react';
import sideBarData from '../assests/side-bar-data.png';
import bottomData from '../assests/bottom-data.png';

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
              <div className="data-content-icon">icon</div>
              <div className="data-content-description">
                <h3>title</h3>
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
              <div className="data-content-icon">icon</div>
              <div className="data-content-description">
                <h3>title</h3>
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
              <div className="data-content-icon">icon</div>
              <div className="data-content-description">
                <h3>title</h3>
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
              <div className="data-content-icon">icon</div>
              <div className="data-content-description">
                <h3>title</h3>
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
              <div className="data-content-icon">icon</div>
              <div className="data-content-description">
                <h3>title</h3>
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

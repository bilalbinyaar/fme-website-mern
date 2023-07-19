import React from 'react';
import c_1 from '../assests/c1.png';
import c_2 from '../assests/c2.png';
import shape_1 from '../assests/cShape1.png';
import shape_2 from '../assests/cShape2.png';
import pointer from '../assests/c-pointer.png';

const CateringIssues = () => {
  return (
    <div className="catering">
      <div className="container">
        <div className="section-title">
          <h2>Catering for Issues</h2>
        </div>
        <div className="catering-wrapper">
          <div className="catering-top">
            <div className="catering-top-content catering-mr">
              <img src={c_1} alt="execution items" />
              <h3>Lookahead Bios</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae erat eu risus varius ultricies
              </p>
            </div>
            <div className="catering-top-content">
              <img src={c_2} alt="execution items" />
              <h3>Survivurship</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae erat eu risus varius ultricies
              </p>
            </div>
          </div>
          <div className="catering-bottom">
            <div className="c-shape-1">
              <img src={shape_2} alt="Shape" />
            </div>
            <div className="c-textual">
              <div className="c-textual-head">
                <img src={pointer} alt="pointer" />
                <h2>Experts</h2>
              </div>
              <h3>
                Team of experts(PHDs) with year of experience in Machine
                Learning / DL for financial markets
              </h3>
            </div>
            <div className="c-shape-2">
              <img src={shape_1} alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringIssues;

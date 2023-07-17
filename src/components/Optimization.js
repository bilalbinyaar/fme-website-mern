import React from 'react';
import sideBarOpt from '../assests/side-bar-opt.png';
import featureOpt from '../assests/opt-feature-img.png';

const Optimization = () => {
  return (
    <div className="optimization">
      <div className="container">
        <div className="side-bar-data">
          <img src={sideBarOpt} alt="side-bar" />
        </div>
        <div className="opt-feature-img">
          <img src={featureOpt} alt="side-bar" />
        </div>
        <div className="opt-text">
          <h2>Optimization</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            erat eu risus varius ultricies Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec vitae erat eu risus varius
            ultricies Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec vitae erat eu risus varius ultricies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Optimization;

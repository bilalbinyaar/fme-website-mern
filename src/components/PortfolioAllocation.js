import React from 'react';
import sideBarPort from '../assests/port-side-bar.png';

const PortfolioAllocation = () => {
  return (
    <div className="optimization portfolio">
      <div className="container">
        <div className="side-bar-data">
          <img src={sideBarPort} alt="side-bar" />
        </div>
        <div className="opt-text portfolio-text">
          <h2>Portfoilo Allocation</h2>
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

export default PortfolioAllocation;

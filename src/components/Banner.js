import React from 'react';
import bannerImg from '../assests/banner-img.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <h1>Financial Modeling & Execution</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae erat eu risus varius ultricies
            </p>
          </div>
          <div className="banner-left res-dn">
            <img src={bannerImg} alt="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

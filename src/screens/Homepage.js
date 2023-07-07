import React from 'react';
import Data from '../components/Data';
import SignalGeneration from '../components/SignalGeneration';
import Backtest from '../components/Backtest';
import Optimization from '../components/Optimization';
import Execution from '../components/Execution';
import PortfolioAllocation from '../components/PortfolioAllocation';
import CateringIssues from '../components/CateringIssues';
import Banner from '../components/Banner';

const Homepage = () => {
  return (
    <div className="home">
      <Banner />
      <Data />
      <SignalGeneration />
      <Backtest />
      <Optimization />
      <Execution />
      <PortfolioAllocation />
      <CateringIssues />
    </div>
  );
};

export default Homepage;

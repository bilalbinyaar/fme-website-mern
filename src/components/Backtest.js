import React from 'react';
import sideBarBacktest from '../assests/side-bar-backtest.png';
import b_1 from '../assests/b-1.png';
import b_2 from '../assests/b-2.png';
import b_3 from '../assests/b-3.png';
import b_4 from '../assests/b-4.png';
import b_5 from '../assests/b-5.png';
import b_6 from '../assests/b-6.png';

const Backtest = () => {
  return (
    <div className="backtest">
      <div className="container">
        <div className="section-title">
          <h2>Backtest (Simulation)</h2>
        </div>
        <div className="backtest-wrapper">
          <div className="side-bar-data">
            <img src={sideBarBacktest} alt="side-bar" />
          </div>
          <div className="backtest-content">
            <div className="sub-backtest-content">
              {/* ITEM 1 */}
              <div className="backtest-content-item">
                <div className="backtest-content-icon">
                  <img src={b_1} alt="backtest-icon" />
                </div>
                <div className="backtest-content-description">
                  <h3>Take Profit</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* ITEM 2 */}
              <div className="backtest-content-item">
                <div className="backtest-content-icon">
                  <img src={b_2} alt="backtest-icon" />
                </div>
                <div className="backtest-content-description">
                  <h3>Stop Loss</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* ITEM 3 */}
              <div className="backtest-content-item">
                <div className="backtest-content-icon">
                  <img src={b_3} alt="backtest-icon" />
                </div>
                <div className="backtest-content-description">
                  <h3>Time Stop</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-backtest-content">
              {/* ITEM 4 */}
              <div className="backtest-content-item">
                <div className="backtest-content-icon">
                  <img src={b_4} alt="backtest-icon" />
                </div>
                <div className="backtest-content-description">
                  <h3>Multiple Slices</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* ITEM 5 */}
              <div className="backtest-content-item">
                <div className="backtest-content-icon">
                  <img src={b_5} alt="backtest-icon" />
                </div>
                <div className="backtest-content-description">
                  <h3>Win/Loss Fee</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* ITEM 6 */}
              <div className="backtest-content-item">
                <div className="backtest-content-icon">
                  <img src={b_6} alt="backtest-icon" />
                </div>
                <div className="backtest-content-description">
                  <h3>Different Orderbook</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="backtest-ledger">
          <table className="ledger-table">
            <thead className="ledger-table-head">Comprehensive ledger</thead>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Backtest;

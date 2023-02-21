import "./UniSelect.css";
import pointer from "../../../assets/School/images/pointer.png";
import uniImg from "../../../assets/School/images/uni-img.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const UniSelect = ({ setShowNavs }) => {
  const [onApply, setOnApply] = useState(false);

  const handleApply = () => {
    setOnApply(true);
  };

  const handleComplete = () => {
    setShowNavs(false);
  };

  return (
    <div className="uni-select-wrap">
      <div className="pointer">
        <img src={pointer} alt="pointer" />
      </div>

      <div className="uni-opts-cover">
        <div className="uni-opts-wrap">
          {onApply && (
            <div className="pls-complete">
              <div className="eager">
                <h2>We know you're eager to start your career</h2>
                <p>Please complete your profile to start your</p>
                <p>dream career</p>
                <Link to="/dashboard/personal/">
                  <button onClick={handleComplete}>Complete Profile</button>
                </Link>
              </div>
            </div>
          )}
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Nigerian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
          <div className="uni-opt">
            <div className="uni-img">
              <img src={uniImg} alt="university" />
            </div>

            <div className="uni-side">
              <h1>The Australian National University (ANU)</h1>
              <p>Canberra, Australian Capital Territory</p>
              <div className="apply">
                <button onClick={handleApply}>Apply</button>
                <span>View All Programs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniSelect;

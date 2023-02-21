import "./AddInfo.css";
import progBar from "../../../assets/School/images/progress-bar.png";
import dropDown from "../../../assets/School/icons/blue-drop-down.svg";
import { Link } from "react-router-dom";

const AddInfo = ({ setShowNavs }) => {
  return (
    <div className="add-info">
      <div className="add-info-wrap">
        <Link style={{ color: "black" }} to="/dashboard/personal/pref-ctry">
          <span className="back">BACK</span>
        </Link>
        <div className="head">
          <h1>Education Information</h1>
          <div className="progress">
            <img src={progBar} alt="progress bar" />
          </div>
        </div>
        <div className="content">
          <div className="full-name">
            <span className="info">Full name</span>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="full-name">
            <span className="info">Email Address</span>
            <div>
              <input type="email" />
            </div>
          </div>
          <div className="phone">
            <span className="info">Phone number</span>
            <div className="phone-wrap">
              <label className="left">
                <span>+91</span>
                <div className="flag"></div>
                <div className="drop-down">
                  <img src={dropDown} alt="drop-down" />
                </div>
              </label>
              <div className="right">
                <input type="tel" />
              </div>
            </div>
          </div>
          <div className="relation">
            <span className="info">Relationship</span>
            <div>
              <input type="email" />
            </div>
          </div>
          <div className="mail">
            <span className="info">Mailing Address</span>
            <div>
              <input type="email" placeholder="Address Line 1*" />
            </div>
            <div>
              <input type="email" placeholder="Address Line 2*" />
            </div>
          </div>
          <div className="state-postal">
            <div className="state">
              <span className="info">State/City</span>
              <label>
                <select>
                  <option value="">Select your state</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="India">India</option>
                  <option value="Chad">Chad</option>
                </select>
                <div className="drop-down">
                  <img src={dropDown} alt="drop-down" />
                </div>
              </label>
            </div>
            <div className="postal">
              <span className="info">Postal code</span>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="btn">
            <Link to="/dashboard/personal/pref-ctry">
              <button>PREV</button>
            </Link>
            <Link to="/dashboard/">
              <button onClick={() => setShowNavs(true)}>SUBMIT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfo;

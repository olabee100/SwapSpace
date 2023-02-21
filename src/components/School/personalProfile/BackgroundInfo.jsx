import "./BackgroundInfo.css";
import dropDown from "../../../assets/School/icons/blue-drop-down.svg";
import underOne from "../../../assets/School/icons/back-under1.svg";
import underTwo from "../../../assets/School/icons/back-under2.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const BackgroundInfo = ({ setShowNavs }) => {
  const [mbbs, setMbbs] = useState(true);
  const [nonMbbs, setNonMbbs] = useState(false);

  const handleMbbs = () => {
    setNonMbbs(false);
    setMbbs(true);
  };

  const handleNonMbbs = () => {
    setMbbs(false);
    setNonMbbs(true);
  };

  return (
    <div className="background-info">
      <Link style={{ color: "black" }} to="/dashboard/">
        <p onClick={() => setShowNavs(true)} className="back">
          BACK
        </p>
      </Link>
      <h1>Background Information</h1>
      <div className="content">
        <div className="full-name">
          <span className="info">Full name</span>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="birth-gen">
          <div className="date-of-birth">
            <span className="info">Date of birth</span>
            <label>
              <input type="date" />
            </label>
          </div>
          <div className="gender">
            <span className="info">Gender</span>
            <label htmlFor="gender">
              <div className="drop-down">
                <img src={dropDown} alt="drop-down" />
              </div>
            </label>
            <select name="gender" id="gender">
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="email">
          <span className="info">Email address</span>
          <label>
            <input type="email" />
          </label>
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
        <div className="nationality">
          <span className="info">Nationality</span>
          <label>
            <select>
              <option value="">Select a country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="India">India</option>
              <option value="Chad">Chad</option>
            </select>
            <div className="drop-down">
              <img src={dropDown} alt="drop-down" />
            </div>
          </label>
        </div>
        <div className="residence">
          <span className="info">Country of residence</span>
          <label>
            <select>
              <option value="">Select country of residence</option>
              <option value="Nigeria">Nigeria</option>
              <option value="India">India</option>
              <option value="Chad">Chad</option>
            </select>
            <div className="drop-down">
              <img src={dropDown} alt="drop-down" />
            </div>
          </label>
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
        <div className="mbbs">
          <div>
            {/* <input type="radio" name="mbbs" id="" /> */}
            <div
              onClick={handleNonMbbs}
              className={nonMbbs ? "radio radio-color" : "radio"}
            ></div>
            <span>Non MBBS</span>
          </div>
          <div>
            {/* <input type="radio" name="mbbs" id="" /> */}
            <div
              onClick={handleMbbs}
              className={mbbs ? "radio radio-color" : "radio"}
            ></div>
            <span>MBBS</span>
          </div>
        </div>
        <div className="skip-next">
          <Link to="/dashboard/personal/edu-one">
            <button>Next</button>
          </Link>
          <Link to="/dashboard/">
            <span onClick={() => setShowNavs(true)}>Skip for Now</span>
          </Link>
        </div>
      </div>
      <div className="under-one">
        <img src={underOne} alt="background-image" />
      </div>
      <div className="under-two">
        <img src={underTwo} alt="background-image" />
      </div>
    </div>
  );
};

export default BackgroundInfo;

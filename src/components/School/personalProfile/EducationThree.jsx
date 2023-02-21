import "./EducationThree.css";
import progBar from "../../../assets/School/images/progress-bar.png";
import dropDown from "../../../assets/School/icons/blue-drop-down.svg";
import { Link } from "react-router-dom";

const EducationThree = () => {
  return (
    <div className="edu-three">
      <div className="edu-three-wrap">
        <Link style={{ color: "black" }} to="/dashboard/personal/edu-one">
          <span className="back">BACK</span>
        </Link>
        <div className="head">
          <h1>Education Information</h1>
          <div className="progress">
            <img src={progBar} alt="progress bar" />
          </div>
        </div>
        <div className="content">
          <div className="ctry">
            <span className="info">Country of Education</span>
            <label>
              <select>
                <option value="">...</option>
                <option value="Nigeria">Nigeria</option>
                <option value="India">India</option>
                <option value="Chad">Chad</option>
              </select>
              <div className="drop-down">
                <img src={dropDown} alt="drop-down" />
              </div>
            </label>
          </div>
          <div className="ctry">
            <span className="info">Highest Qualification</span>
            <label>
              <select>
                <option value="">...</option>
                <option value="Nigeria">Nigeria</option>
                <option value="India">India</option>
                <option value="Chad">Chad</option>
              </select>
              <div className="drop-down">
                <img src={dropDown} alt="drop-down" />
              </div>
            </label>
          </div>
          <div className="ctry">
            <span className="info">University name/School name</span>
            <label>
              <select>
                <option value="">...</option>
                <option value="Nigeria">Nigeria</option>
                <option value="India">India</option>
                <option value="Chad">Chad</option>
              </select>
              <div className="drop-down">
                <img src={dropDown} alt="drop-down" />
              </div>
            </label>
          </div>
          <div className="degree-cgpa">
            <div className="degree">
              <span className="info">Degree</span>
              <label>
                <select>
                  <option value="">...</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="India">India</option>
                  <option value="Chad">Chad</option>
                </select>
                <div className="drop-down">
                  <img src={dropDown} alt="drop-down" />
                </div>
              </label>
            </div>
            <div className="cgpa">
              <span className="info">Percentage/CGPA</span>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="up-resume">
            <span>Upload resume</span>
          </div>
          <div className="btn">
            <Link to="/dashboard/personal/edu-one">
              <button>PREV</button>
            </Link>
            <Link to="/dashboard/personal/edu-two">
              <button>NEXT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationThree;

import "./EducationOne.css";
import progBar from "../../../assets/School/images/progress-bar.png";
import dropDown from "../../../assets/School/icons/blue-drop-down.svg";
import smallUp from "../../../assets/School/icons/small-up.svg";
import smallDown from "../../../assets/School/icons/small-down.svg";
import { Link } from "react-router-dom";

const EducationOne = () => {
  return (
    <div className="edu-one">
      <div className="edu-one-wrap">
        <Link style={{ color: "black" }} to="/dashboard/personal/">
          <span className="back">BACK</span>
        </Link>
        <div className="head">
          <h1>Education Information</h1>
          <div className="progress">
            <img src={progBar} alt="progress bar" />
          </div>
        </div>
        <div className="content">
          <div className="lvl">
            <span className="info">Level of Education</span>
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
          <div className="grade">
            <span className="info">Grading System</span>
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
          <div className="logs-cgpa">
            <div className="logs">
              <span className="info">Total Backlogs</span>
              <label>
                <select>
                  <option value="">...</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="India">India</option>
                  <option value="Chad">Chad</option>
                </select>
                <div className="up-down">
                  <div className="up">
                    <img src={smallUp} alt="small-up" />
                  </div>
                  <div className="down">
                    <img src={smallDown} alt="small-down" />
                  </div>
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
          <div className="test-date">
            <div className="test">
              <span className="info">Test Name</span>
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
            <div className="date">
              <span className="info">Examination Date</span>
              <div>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="score">
            <span className="info">Test Score</span>
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
          <div className="years">
            <span className="info">Total Years of Education(In years)</span>
            <label>
              <select>
                <option value="">...</option>
                <option value="Nigeria">Nigeria</option>
                <option value="India">India</option>
                <option value="Chad">Chad</option>
              </select>
              <div className="up-down">
                <div className="up">
                  <img src={smallUp} alt="small-up" />
                </div>
                <div className="down">
                  <img src={smallDown} alt="small-down" />
                </div>
              </div>
            </label>
          </div>
          <div className="btn">
            <Link to="/dashboard/personal/">
              <button>PREV</button>
            </Link>
            <Link to="/dashboard/personal/edu-three">
              <button>NEXT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationOne;

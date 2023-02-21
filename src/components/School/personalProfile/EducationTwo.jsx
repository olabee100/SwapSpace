import "./EducationTwo.css";
import progBar from "../../../assets/School/images/progress-bar.png";
import smallUp from "../../../assets/School/icons/small-up.svg";
import smallDown from "../../../assets/School/icons/small-down.svg";
import { Link } from "react-router-dom";

const EducationTwo = () => {
  return (
    <div className="edu-two">
      <div className="edu-two-wrap">
        <Link style={{ color: "black" }} to="/dashboard/personal/edu-three">
          <span className="back">BACK</span>
        </Link>
        <div className="head">
          <h1>Education Information</h1>
          <div className="progress">
            <img src={progBar} alt="progress bar" />
          </div>
        </div>
        <div className="content">
          <div className="tenth">
            <span className="info">
              10<sup>th</sup> Percentage
            </span>
            <label>
              <input type="file" name="" id="" />
              <div className="upload">
                <span>Upload DOC</span>
                <span className="plus">+</span>
              </div>
            </label>
          </div>
          <div className="twelveth">
            <span className="info">
              12<sup>th</sup> Percentage
            </span>
            <label>
              <input type="file" name="" id="" />
              <div className="upload">
                <span>Upload DOC</span>
                <span className="plus">+</span>
              </div>
            </label>
          </div>
          <div className="pass-card">
            <div className="passport">
              <span className="info">Passport</span>
              <label>
                <input type="file" name="" id="" />
                <div className="up-pass">
                  <span>Upload Passport</span>
                  <span className="plus">+</span>
                </div>
              </label>
            </div>
            <div className="card">
              <span className="info">Aadhar Card</span>
              <label>
                <input type="file" name="" id="" />
                <div className="up-pass">
                  <span>Upload Passport</span>
                  <span className="plus">+</span>
                </div>
              </label>
            </div>
          </div>
          <div className="neet-mark">
            <span className="info">Neet Expected Marks</span>
            <label>
              <input placeholder="123" type="number" name="" id="" />
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
          <div className="neet">
            <span className="info">Neet Score</span>
            <label>
              <input type="file" name="" id="" />
              <div className="upload">
                <span>Upload DOC</span>
                <span className="plus">+</span>
              </div>
            </label>
          </div>
          <div className="btn">
            <Link to="/dashboard/personal/edu-three">
              <button>PREV</button>
            </Link>
            <Link to="/dashboard/personal/pref-ctry">
              <button>NEXT</button>
            </Link>
          </div>
        </div>
        <div className="side-marksheet">
          <span>10th Marksheet</span>
          <span>12th Marksheet</span>
          <span>Passport</span>
          <span>Aadhar Card</span>
          <span>Neet Expected</span>
          <span>Marks</span>
          <span>Neet Scorecard</span>
        </div>
      </div>
    </div>
  );
};

export default EducationTwo;

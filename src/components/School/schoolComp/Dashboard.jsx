import "./Dashboard.css";

import progBar from "../../../assets/School/images/progress-bar.png";
import hrLine from "../../../assets/School/images/hr-line.png";
import singlePerson from "../../../assets/School/images/single-person.png";
import progTrack from "../../../assets/School/icons/prog-track.svg";
import gather from "../../../assets/School/icons/gather.svg";
import sep from "../../../assets/School/icons/sep.svg";
import dropDown from "../../../assets/School/icons/black-drop-down.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dash-std-main-content school">
      <div className="prog-track">
        <div className="step">
          <div>
            <span>1</span>
          </div>
          <span style={{ width: "75px" }}>Profile completion</span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>2</span>
          </div>
          <span>
            Document <br /> selected
          </span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>3</span>
          </div>
          <span>
            Pendencies <br /> rejection
          </span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>4</span>
          </div>
          <span>
            Conditional <br />
            offer letter
          </span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>5</span>
          </div>
          <span style={{ width: "70px" }}>
            Completed <br /> document seleted
          </span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>6</span>
          </div>
          <span style={{ width: "45px" }}>Offer letter</span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>7</span>
          </div>
          <span>COA</span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>8</span>
          </div>
          <span style={{ width: "35px" }}>Visa file</span>
        </div>
        <div className="sep">
          <img src={sep} alt="separate" />
        </div>
        <div className="step">
          <div>
            <span>9</span>
          </div>
          <span style={{ width: "55px" }}>Visa decision</span>
        </div>
      </div>

      <div className="shape">
        <div></div>
        <div></div>
      </div>

      <div className="content-wrapper">
        <div className="top-content">
          <div className="top-left">
            <div className="top-left-wrapper">
              <div className="prof-content">
                <div className="prof-cont-wrapper">
                  <div className="prof-div">
                    <h1>Profile Completion</h1>
                    <div className="prog-bar">
                      <img src={progBar} alt="prog-bar" />
                    </div>
                  </div>

                  <p>
                    Please complete your profile to identify the list of most
                    relevant universities for you
                  </p>

                  <div className="prof-nav">
                    <button>Personal Info</button>
                    <button>Educational Info</button>
                    <button>Test Score</button>
                    <button>Experience</button>
                  </div>

                  <div className="prof-hr-line">
                    <img src={hrLine} alt="hr-line" />
                  </div>

                  <button className="complete">Complete all fields</button>
                </div>
              </div>

              <div className="eval-wrapper">
                <div className="eval-contain">
                  <div className="eval">
                    <p>Profile eveluations report</p>
                    <span>
                      10 recommendations based on your profile evaluation
                    </span>
                    <div className="down-ar">
                      <img src={dropDown} alt="drop-down-icon" />
                    </div>
                  </div>
                </div>
                <div className="eval-contain">
                  <div className="eval">
                    <p>Your Applications</p>
                    <span>0 application</span>
                    <div className="down-ar">
                      <img src={dropDown} alt="drop-down-icon" />
                    </div>
                  </div>
                </div>
                <div className="eval-contain">
                  <div className="eval">
                    <p>Shortlist your universities</p>
                    <span>0 application</span>
                    <div className="down-ar">
                      <img src={dropDown} alt="drop-down-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/school/unipage">
                <button className="eligible">Check Eligibility</button>
              </Link>
            </div>
          </div>
          <div className="top-right">
            <div className="top-right-wrapper">
              <div className="above">
                <p>Want help to get started</p>
                <div>Verify your account and connect with an Expert</div>
                <br />
                <button>Connect with an Expert</button>
              </div>
              <div className="below">
                <br />
                <div className="gather">
                  <img src={gather} alt="gather" />
                </div>
                <p>
                  Join our live webinar section to guide you on your application
                  process
                </p>
                <Link to="/school/webinar">
                  <button>Get Connected</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <div className="document">
            <span>Document Section</span>
          </div>
          <div className="below-doc">
            <div className="below-doc-left">
              <p>Keep track of all your documents needed for application</p>
              <p>We accept document of all kind</p>
              <button>Upload Document</button>
              <p className="please">
                Please upload your documents if you have not done so
              </p>
            </div>
            <div className="below-doc-right">
              <div className="single-person">
                <img src={singlePerson} alt="single-person" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import "./PersonalHome.css";
import offerL from "../../../assets/School/icons/offerl-logo.svg";
import dropDown from "../../../assets/School/icons/drop-down-icon.svg";
import { Routes, Route } from "react-router-dom";
import BackgroundInfo from "./BackgroundInfo";
import EducationOne from "./EducationOne";
import EducationTwo from "./EducationTwo";
import EducationThree from "./EducationThree";
import AddInfo from "./AddInfo";
import PrefCountry from "./PrefCountry";

const PersonalHome = ({ setShowNavs }) => {
  return (
    <div className="personal-profile">
      <nav>
        <div className="logo">
          <div>
            <img src={offerL} alt="offer-letter" />
          </div>
          <p>OFFERLETTER</p>
        </div>
        <div className="middle">
          <div>
            <span>Webinar</span>
          </div>
          <div>
            <span>Service</span>
            <div className="drop-down">
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
          <div>
            <span>Schools</span>
            <div className="drop-down">
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
          <div>
            <span>Explores</span>
            <div className="drop-down">
              <img src={dropDown} alt="drop-down" />
            </div>
          </div>
        </div>
        <div className="last">
          <div>
            <span>Profile Evaluation</span>
          </div>
          <div>
            <span>CJ</span>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<BackgroundInfo setShowNavs={setShowNavs} />}
        />
        <Route
          path="/add-info"
          element={<AddInfo setShowNavs={setShowNavs} />}
        />
        <Route path="/edu-one" element={<EducationOne />} />
        <Route path="/edu-two" element={<EducationTwo />} />
        <Route path="/edu-three" element={<EducationThree />} />
        <Route path="/pref-ctry" element={<PrefCountry />} />
      </Routes>
    </div>
  );
};

export default PersonalHome;

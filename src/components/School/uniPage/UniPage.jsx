import NavDash from "../NavDash";
import Sidebar from "../Sidebar";
import "./UniPage.css";
import funnelIcon from "../../../assets/School/icons/funnel-icon.svg";
import downIcon from "../../../assets/School/icons/black-drop-down.svg";
import cancelIcon from "../../../assets/School/icons/cancel-icon.svg";
import { useState } from "react";
import UniSelect from "./UniSelect";
import Specialization from "./Specialization";

// {sidebarProps:{ onUni, onSpecial, handleOnUni, handleOnSpecial }}

const UniPage = ({
  sidebarProps: { onUni, onSpecial, handleOnUni, handleOnSpecial },
  setShowNavs,
}) => {
  const [schFilter, setSchFilter] = useState(false);
  const [eligDrop, setEligDrop] = useState(false);
  const [showFunnel, setShowFunnel] = useState(false);

  const handleSchFilter = () => {
    setEligDrop(false);
    setSchFilter(!schFilter);
  };

  const handleEligDrop = () => {
    setSchFilter(false);
    setEligDrop(!eligDrop);
  };

  return (
    <section className="unipage">
      <div className="unipage-main">
        <div className="main-wrapper">
          <div className="search">
            <div className="search-box srch-left">
              <input type="text" placeholder="Search School" />
              <div>
                <span>Search</span>
              </div>
            </div>
            <div className="search-right-wrap">
              <div className="search-box">
                <input type="text" placeholder="Search course to study" />
                <div>
                  <span>Search</span>
                </div>
              </div>
              <div className="vert-line"></div>
              <div
                onClick={() => setShowFunnel(!showFunnel)}
                className="funnel-icon"
              >
                <img src={funnelIcon} alt="funnel-icon" />
              </div>
            </div>
          </div>

          <div className="uni-sp">
            <span
              style={{ color: onUni ? "#0D2C58" : "#89969F" }}
              onClick={handleOnUni}
            >
              Universities
            </span>
            <span
              style={{ color: onSpecial ? "#0D2C58" : "#89969F" }}
              onClick={handleOnSpecial}
            >
              Specialization
            </span>
          </div>

          <div className="main-content">
            {showFunnel && (
              <div className="funnel-drop">
                <span>Low Tuition Fees</span>
                <span>High Tuition Fees</span>
                <span>Low Application Fees</span>
                <span>High Application Fees</span>
                <span>School Ranks</span>
              </div>
            )}
            <div className="filter">
              <div className="filter-opt">
                <div className="filter-opt-wrap" onClick={handleSchFilter}>
                  <span>School Filter</span>
                  <div className="down-icon">
                    <img src={downIcon} alt="down-icon" />
                  </div>
                </div>

                <div
                  className={
                    schFilter ? "sch-filter-drop show" : "sch-filter-drop"
                  }
                >
                  <div className="pick first-pick">
                    <p>Preferred country to study</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>School</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>School Program</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Discipline</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Enrollment</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Specialization</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>

                  <div className="fee">
                    <p>Application Fee</p>
                    <div className="fee-range">
                      <input type="range" min="0" max="100" default="0" />
                      <div>
                        <span>0k</span>
                        <span>100k</span>
                      </div>
                    </div>
                  </div>
                  <div className="fee">
                    <p>Application Fee</p>
                    <div className="fee-range">
                      <input type="range" min="0" max="100" default="0" />
                      <div>
                        <span>0k</span>
                        <span>100k</span>
                      </div>
                    </div>
                  </div>

                  <button className="apply-filter">Apply Filter</button>
                </div>
              </div>
              <div className="filter-opt" onClick={handleEligDrop}>
                <div className="filter-opt-wrap">
                  <span>Eligibility</span>
                  <div className="down-icon">
                    <img src={downIcon} alt="down-icon" />
                  </div>
                </div>

                <div className={eligDrop ? "elig-drop show" : "elig-drop"}>
                  <div className="pick">
                    <p>Do you have a valid passort</p>
                    <div className="pick-opt">
                      <span>I don't have</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Nationality</p>
                    <div className="pick-opt">
                      <span>India</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Education level</p>
                    <div className="pick-opt">
                      <span>3-year Bachelor's degree</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Grading Scheme</p>
                    <div className="pick-opt">
                      <span>Higher Education 5.0 scale</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="pick">
                    <p>Average Grade</p>
                    <div className="pick-opt">
                      <span>3.88</span>
                    </div>
                  </div>
                  <div className="pick">
                    <p>English Exam Type</p>
                    <div className="pick-opt">
                      <span>GMAT</span>

                      <div className="cancel-icon">
                        <img src={cancelIcon} alt="cancel-icon" />
                      </div>
                      <div className="down-icon">
                        <img src={downIcon} alt="down-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="show-gmat">
                    <span>Show GMAT Exam Score</span>
                    <input type="checkbox" />
                  </div>

                  <button className="apply-filter">SAve to Profile</button>
                </div>
              </div>
            </div>

            <div className="uni-select">
              {onUni && <UniSelect setShowNavs={setShowNavs} />}
              {onSpecial && <Specialization />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniPage;

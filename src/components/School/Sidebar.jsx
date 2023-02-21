import "./Sidebar.css";
import dashIcon from "../../assets/School/icons/dash-icon.svg";
import progIcon from "../../assets/School/icons/prog-icon.svg";
import profIcon from "../../assets/School/icons/prof-icon.svg";
import adIcon from "../../assets/School/icons/admission-icon.svg";
import inboxIcon from "../../assets/School/icons/inbox-icon.svg";
import webinarIcon from "../../assets/School/icons/webinar-icon.svg";
import referIcon from "../../assets/School/icons/refer-icon.svg";
import logoutIcon from "../../assets/School/icons/logout-icon.svg";
import downIcon from "../../assets/School/icons/drop-down-icon.svg";
import upIcon from "../../assets/School/icons/arrow-up.svg";
import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Sidebar = ({
  sidebarProps: {
    onUni,
    onSpecial,
    onExams,
    handleOnExams,
    handleOnUni,
    handleOnSpecial,
  },
  showNavs,
}) => {
  const [showProg, setShowProg] = useState(false);
  const [showAdm, setShowAdm] = useState(false);
  const [showProf, setShowProf] = useState(false);
  const [showWeb, setShowWeb] = useState(false);
  const [onViewProfile, setOnViewProfile] = useState(false);
  const [onDocuments, setOnDocuments] = useState(false);
  const [onAppliedAt, setOnAppliedAt] = useState(false);
  const [onAppStatus, setOnAppStatus] = useState(false);
  const [onWebinar, setOnWebinar] = useState(false);

  const handleOnViewProfile = () => {
    setOnDocuments(false);
    setOnViewProfile(true);
  };

  const handleOnDocuments = () => {
    setOnViewProfile(false);
    setOnDocuments(true);
  };

  const handleOnAppliedAt = () => {
    setOnAppStatus(false);
    setOnAppliedAt(true);
  };

  const handleOnAppStatus = () => {
    setOnAppliedAt(false);
    setOnAppStatus(true);
  };

  // const handleShowProg = () => {
  //     setShowAdm(false)
  //     setShowProf(false)
  //     setShowWeb(false)
  //     setShowProg(!showProg)
  // }
  // const handleShowProf = () => {
  //     setShowProg(false)
  //     setShowAdm(false)
  //     setShowWeb(false)
  //     setShowProf(!showProf)
  // }
  // const handleShowAdm = () => {
  //     setShowProg(false)
  //     setShowProf(false)
  //     setShowWeb(false)
  //     setShowAdm(!showAdm)
  // }
  // const handleShowWeb = () => {
  //     powerOff()
  //     setShowWeb(!showWeb)
  // }

  // function powerOff(){
  //     setShowProg(false)
  //     setShowAdm(false)
  //     setShowProf(false)
  //     setShowWeb(false)
  // }

  const dropList = [setShowAdm, setShowProf, setShowProg, setShowWeb];

  const closeDrop = (setDrop, Drop) => {
    dropList.forEach((drop) => {
      if (setDrop === drop) {
        setDrop(!Drop);
      } else {
        drop(false);
      }
    });
  };

  return (
    <>
      {showNavs && (
        <div className="sideContainer">
          <section className="sidebar-school">
            <div className="edu">
              <span>Offerletter</span>
            </div>
            <div className="option-wrapper">
              <div className="dash-opts-top">
                <div className="single-opt">
                  <div className="single-opt-wrap">
                    <div className="d-img">
                      <img src={dashIcon} alt="dash-icon" />
                    </div>
                    <Link style={{ color: "#fff" }} to="/school/dashboard">
                      <span>Dashboard</span>
                    </Link>
                  </div>
                </div>
                <div className="single-opt">
                  <div
                    onClick={() => closeDrop(setShowProg, showProg)}
                    className="single-opt-wrap"
                  >
                    <div className="d-img">
                      <img src={progIcon} alt="prog-icon" />
                    </div>
                    <span>Program</span>
                    <div className="down-arrow">
                      <img
                        src={showProg ? upIcon : downIcon}
                        alt="down arrow"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      showProg ? "prog-opts-wrap fade-opt" : "prog-opts-wrap"
                    }
                  >
                    <div className="prog-opts">
                      <div>
                        <Link
                          style={{ color: onUni ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/unipage"
                        >
                          <span
                            style={{
                              backgroundColor: onUni ? "#EFF8FF" : "#0D2C58",
}}
                            onClick={handleOnUni}
                          >
                            Universi                            ty
                          </span>
                        </Link>
                        <Link
                          style={{ color: onSpecial ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/unipage"
                        >
                          <span
                            style={{
                              backgroundColor: onSpecial
                                ? "#EFF8FF"
                                : "#0D2C58",
                              color: onSpecial ? "#0D2C58" : "#fff",
                            }}
                            onClick={handleOnSpecial}
                          >
                            Specialization
                          </span>
                        </Link>
                        <Link
                          style={{ color: onExams ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/exams"
                        >
                          <span
                            style={{
                              backgroundColor: onExams ? "#EFF8FF" : "#0D2C58",
                              color: onExams ? "#0D2C58" : "#fff",
                            }}
                            onClick={handleOnExams}
                          >
                            Exams
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-opt">
                  <div
                    onClick={() => closeDrop(setShowAdm, showAdm)}
                    className="single-opt-wrap"
                  >
                    <div className="d-img">
                      <img src={adIcon} alt="admission-icon" />
                    </div>
                    <span>Admission</span>
                    <div className="down-arrow">
                      <img src={showAdm ? upIcon : downIcon} alt="down arrow" />
                    </div>
                  </div>

                  <div
                    className={
                      showAdm
                        ? "prog-opts-wrap prof-fade-opt"
                        : "prog-opts-wrap"
                    }
                  >
                    <div className="prog-opts">
                      <div>
                        <Link
                          style={{ color: onAppliedAt ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/admission"
                        >
                          <span
                            style={{
                              backgroundColor: onAppliedAt
                                ? "#EFF8FF"
                                : "#0D2C58",
                              color: onAppliedAt ? "#0D2C58" : "#fff",
                            }}
                            onClick={handleOnAppliedAt}
                          >
                            Applied At
                          </span>
                        </Link>
                        <Link
                          style={{ color: onAppStatus ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/admission/application-status"
                        >
                          <span
                            style={{
                              backgroundColor: onAppStatus
                                ? "#EFF8FF"
                                : "#0D2C58",
                              color: onAppStatus ? "#0D2C58" : "#fff",
                            }}
                            onClick={handleOnAppStatus}
                          >
                            Application Status
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-opt">
                  <div
                    onClick={() => closeDrop(setShowProf, showProf)}
                    className="single-opt-wrap"
                  >
                    <div className="d-img">
                      <img src={profIcon} alt="profile icon" />
                    </div>
                    <span>Profile</span>
                    <div className="down-arrow">
                      <img
                        src={showProf ? upIcon : downIcon}
                        alt="down arrow"
                      />
                    </div>
                  </div>

                  <div
                    className={
                      showProf
                        ? "prog-opts-wrap prof-fade-opt"
                        : "prog-opts-wrap"
                    }
                  >
                    <div className="prog-opts">
                      <div>
                        <Link
                          style={{ color: onViewProfile ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/profile"
                        >
                          <span
                            style={{
                              backgroundColor: onViewProfile
                                ? "#EFF8FF"
                                : "#0D2C58",
                              color: onViewProfile ? "#0D2C58" : "#fff",
                            }}
                            onClick={handleOnViewProfile}
                          >
                            View Profile
                          </span>
                        </Link>
                        <Link
                          style={{ color: onDocuments ? "#0D2C58" : "#fff" }}
                          to="/school/dashboard/school/profile/documents"
                        >
                          <span
                            style={{
                              backgroundColor: onDocuments
                                ? "#EFF8FF"
                                : "#0D2C58",
                              color: onDocuments ? "#0D2C58" : "#fff",
                            }}
                            onClick={handleOnDocuments}
                          >
                            Documents
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-opt">
                  <div className="single-opt-wrap">
                    <div className="d-img">
                      <img src={inboxIcon} alt="inbox-icon" />
                    </div>
                    <Link style={{ color: "#fff" }} to="/school/dashboard/school/inbox">
                      <span>Inbox</span>
                    </Link>
                  </div>
                </div>
                <div className="single-opt">
                  <div
                    onClick={() => closeDrop(setShowWeb)}
                    className="single-opt-wrap"
                  >
                    <div className="d-img">
                      <img src={webinarIcon} alt="webinar-icon" />
                    </div>
                    <Link style={{ color: "#fff" }} to="/school/dashboard/school/webinar">
                      <span>Webinar</span>
                    </Link>
                    {/* <div className="down-arrow">
                                <img src={showWeb? upIcon : downIcon} alt="down arrow" />
                            </div> */}
                  </div>

                  {/* <div className={showWeb? "prog-opts-wrap fade-opt" : "prog-opts-wrap"}>
                            <div className="prog-opts">
                                <div>
                                    <Link style={{color: onWebinar? "#0D2C58" : "#fff"}} to='/dashboard/webinar'>
                                        <span style={{
                                            backgroundColor: onWebinar? "#EFF8FF" : "#0D2C58", 
                                            color: onWebinar? "#0D2C58" : "#fff",
                                        }} onClick={() => setOnWebinar(true)}>Webinar</span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                </div>
              </div>
              <div className="dash-opts-bottom">
                <div className="single-opt">
                  <div className="single-opt-wrap">
                    <div className="d-img">
                      <img src={referIcon} alt="refer-icon" />
                    </div>
                    <span>Refer and Earn</span>
                  </div>
                </div>
                <div className="single-opt">
                  <div className="single-opt-wrap">
                    <div className="d-img">
                      <img src={logoutIcon} alt="logout-icon" />
                    </div>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Sidebar;

// {showProg? "prog-opts show-prog" : "prog-opts"}

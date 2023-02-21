// styles
import "./Navbar.css";

// images and icons
import message from "./../../../assets/Home/images/message-Card.png";
import arrowDown from "./../../../assets/Home/images/arrow-down.svg";
// from react
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [serviceDropDown, setServiceDropDown] = useState(false);
  const [schoolDropDown, setSchoolDropDown] = useState(false);
  const [exploreDropDown, setExploreDropDown] = useState(false);

  const handleService = () => {
    setServiceDropDown(!serviceDropDown ? "true" : "");
    setSchoolDropDown(false);
    setExploreDropDown(false);
  };
  const handleSchool = () => {
    setSchoolDropDown(!schoolDropDown ? "true" : "");
    setServiceDropDown(false);
    setExploreDropDown(false);
  };
  const handleExplore = () => {
    setExploreDropDown(!exploreDropDown ? "true" : "");
    setServiceDropDown(false);
    setSchoolDropDown(false);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <div>
          <img src={message} alt="Messages" />
        </div>
        <span>OFFER LETTER</span>
      </div>
      <ul className="navs">
        <li>Webinars</li>
        <li onClick={handleService}>
          Services{" "}
          {/* <span> */}
            <img src={arrowDown} alt="Services" />
          {/* </span> */}
          {serviceDropDown && (
            <ul className="drop-down">
              <li>
                <a href="#study-abroad">Study Abroad</a>
              </li>
              <li>
                <a href="#mbbs-abroad"> MBBS in Abroad</a>
              </li>
              <li>
                <a href="#study-india">Study in India</a>
              </li>
              <li>
                <a href="#mbbs-india">MBBS in India </a>
              </li>
            </ul>
          )}
        </li>

        <li onClick={handleSchool}>
          Schools{" "}
          {/* <span> */}
            <img src={arrowDown} alt="Schools" />
          {/* </span> */}
          {schoolDropDown && (
            <ul className="drop-down">
              <li>
                <Link to="/">Study Abroad</Link>
              </li>
              <li>
                <Link to="/"> MBBS in Abroad</Link>
              </li>
              <li>
                <Link to="/">Study in India</Link>
              </li>
              <li>
                <Link to="/">MBBS in India </Link>
              </li>
            </ul>
          )}
        </li>
        <li onClick={handleExplore}>
          Explores{" "}
          {/* <span> */}
            <img src={arrowDown} />
          {/* </span> */}
          {exploreDropDown && (
            <ul className="drop-down">
              <li>
                <Link to="/">Study Abroad</Link>
              </li>
              <li>
                <Link to="/"> MBBS in Abroad</Link>
              </li>
              <li>
                <Link to="/">Study in India</Link>
              </li>
              <li>
                <Link to="/">MBBS in India </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul className="buttons">
        <li style={{ fontWeight: "600" }}>Profile Evaluation</li>
        <li className="login-btn">Log in</li>
      </ul>
    </div>
  );
};

export default Navbar;

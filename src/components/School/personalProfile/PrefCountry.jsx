import "./PrefCountry.css";
import indiaFlag from "../../../assets/School/icons/india-flag.svg";
import franceFlag from "../../../assets/School/icons/france-flag.svg";
import { Link } from "react-router-dom";

const PrefCountry = () => {
  return (
    <div className="pref-ctry">
      <div className="ctry-wrap">
        <h1>Please select a prefered country for your Admission</h1>
        <div className="flags">
          <div className="flag-img">
            <div>
              <img src={indiaFlag} alt="indian-flag" />
            </div>
            <span>India</span>
          </div>
          <div className="flag-img">
            <div>
              <img src={franceFlag} alt="france-flag" />
            </div>
            <span>France</span>
          </div>
          <div className="flag-img">
            <div>
              <img src={franceFlag} alt="france-flag" />
            </div>
            <span>France</span>
          </div>
          <div className="flag-img">
            <div>
              <img src={franceFlag} alt="france-flag" />
            </div>
            <span>France</span>
          </div>
          <div className="flag-img">
            <div>
              <img src={franceFlag} alt="france-flag" />
            </div>
            <span>France</span>
          </div>
        </div>
        <div className="btn">
          <Link to="/dashboard/personal/edu-two">
            <button>PREV</button>
          </Link>
          <Link to="/dashboard/personal/add-info">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrefCountry;

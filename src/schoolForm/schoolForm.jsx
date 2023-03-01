import "./schoolForm.css";
import dropDown from "../assets/School/icons/blue-drop-down.svg";
import underOne from "../assets/School/icons/back-under1.svg";
import underTwo from "../assets/School/icons/back-under2.svg";
import PhoneCode from "../components/School/PhoneCode";
import { useState } from "react";
import { Link } from "react-router-dom";

const SchoolForm = ({ setShowNavs }) => {
    const [phone, setPhone] = useState("");
    
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
      <h1>Profile Information</h1>
      <div className="content">
        <div className="full-name">
          <span className="info">[University] Name</span>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="full-name">
          <span className="info">Contract Person</span>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="full-name">
          <span className="info">Owner</span>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className="phone">
          <span className="info">Phone number</span>
          <div className= "my-no">
          <div className="phone-no">
                    <PhoneCode setPhone={setPhone} />
                  </div>
                  </div>
         </div>

        <div className="birth-gen">
          <div className="date-of-birth">
            <span className="info">Contract Date</span>
            <label>
              <input type="date" />
            </label>
          </div>
          <div className="date-of-birth">
            <span className="info">Renewal Date</span>
            <label>
              <input type="date" />
            </label>
          </div>
         
          
        </div>

        <div className="full-name">
          <span className="info">Managed By</span>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="full-name">
          <span className="info">Address</span>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="full-name">
          <span className="info">Website</span>
          <div>
            <input type="text" />
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
        
        <div className="skip-next">
          <Link to="/dashboard/personal/edu-one">
            <button>Cancel</button>
          </Link>
          <Link to="/dashboard/personal/edu-one">
            <button>Submit</button>
          </Link>
          
        </div>
        <div className="mbbs">
          <div>
            {/* <input type="radio" name="mbbs" id="" /> */}
            <div
              onClick={handleNonMbbs}
              className={nonMbbs ? "radio radio-color" : "radio"}
            ></div>
            <span>Standalone</span>
          </div>
          <div>
            {/* <input type="radio" name="mbbs" id="" /> */}
            <div
              onClick={handleMbbs}
              className={mbbs ? "radio radio-color" : "radio"}
            ></div>
            <span>Chain</span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default SchoolForm;

import "./AppStatusHome.css";
import stdImg from "../../../assets/School/images/student-image.png";
import { Link } from "react-router-dom";

const AppStatusHome = () => {
  return (
    <div className="a-s-home-school">
      <div className="adm-bar-acpt">
        <div className="first">
          <div className="std-img">
            <img src={stdImg} alt="student-img" />
          </div>
          <h3>Amaira Adya</h3>
          <p>025568BG</p>
          <span>Micro Biology</span>
        </div>

        <div className="middle">
          <div className="btn-form">
            <span>Status</span>
          </div>
          <h1>APPLICATION</h1>
          <h1>ACCEPTED</h1>
        </div>

        <div className="third">
          <div className="btn-form">
            <span>CONGRATULATION</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            unde quasi nihil ipsam possimus rerum assumenda repellat blanditiis
            eius aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Officia repellendus rerum quidem adipisci earum et? Veritatis
            nam totam dolores sunt.
          </p>
          <Link to="/school/admission/application-status/payment">
            {" "}
            <div className="btn-form">
              <span className="pay">Proceed To Payment</span>
            </div>{" "}
          </Link>
        </div>
      </div>

      <div className="adm-bar-rej">
        <div className="first">
          <div className="std-img">
            <img src={stdImg} alt="student-img" />
          </div>
          <h3>Amaira Adya</h3>
          <p>025568BG</p>
          <span>Micro Biology</span>
        </div>

        <div className="middle">
          <div className="btn-form">
            <span>Status</span>
          </div>
          <h1>APPLICATION</h1>
          <h1>REJECTED</h1>
        </div>

        <div className="third">
          <div className="btn-form">
            <span>Reason</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            unde quasi nihil ipsam possimus rerum assumenda repellat blanditiis
            eius aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Officia repellendus rerum quidem adipisci earum et? Veritatis
            nam totam dolores sunt.
          </p>
        </div>
      </div>

      <div className="adm-bar-rej">
        <div className="first">
          <div className="std-img">
            <img src={stdImg} alt="student-img" />
          </div>
          <h3>Amaira Adya</h3>
          <p>025568BG</p>
          <span>Micro Biology</span>
        </div>

        <div className="middle">
          <div className="btn-form">
            <span>Status</span>
          </div>
          <h1>APPLICATION</h1>
          <h1>REJECTED</h1>
        </div>

        <div className="third">
          <div className="btn-form">
            <span>Reason</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            unde quasi nihil ipsam possimus rerum assumenda repellat blanditiis
            eius aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Officia repellendus rerum quidem adipisci earum et? Veritatis
            nam totam dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppStatusHome;

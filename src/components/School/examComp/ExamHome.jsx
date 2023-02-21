import "./ExamHome.css";
import bookImage from "../../../assets/School/icons/book-image.svg";
import gather from "../../../assets/School/icons/gather.svg";
import { Link } from "react-router-dom";

const ExamHome = () => {
  return (
    <div className="exams-wrapper">
      <div className="exam-top-content">
        <div className="prepare">
          <span>Prepare for Exam</span>
        </div>
        <div className="exams-text">
          <div className="text-left">
            <p>Get prepared for your GMAT exam with helpful guide to</p>
            <p>help you get started</p>
            <Link to="/school/exams/gmat">
              <button>Get Started</button>
            </Link>
          </div>
          <div className="text-img">
            <img src={bookImage} alt="book-img" />
          </div>
        </div>
      </div>

      <div className="exam-bottom-content">
        <div className="exams-text">
          <div className="text-left">
            <p>Do you need assitance to help guide you as</p>
            <p>you prepare for your exam?</p>
            <button>Get in touch</button>
          </div>
          <div className="text-img">
            <img src={gather} alt="gather" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHome;

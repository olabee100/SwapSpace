import "./Inbox.css";
import articleImg from "../../../assets/School/icons/article-image.svg";
import gather from "../../../assets/School/icons/gather.svg";
import uniIImage from "../../../assets/School/images/uni-i-img.png";

const Inbox = () => {
  return (
    <div className="inbox-page">
      <div className="inbox-wrapper">
        <div className="left">
          <div className="uni-inbox">
            <div className="uni-i-img">
              <img src={uniIImage} alt="university-inbox-img" />
            </div>
            <div className="side">
              <h1>Indian University</h1>
              <p>
                We are excited to inform you that you have been shortlisted to
                study computer engineering
              </p>
              <p>in Indian university...</p>
            </div>
          </div>
          <div className="uni-inbox">
            <div className="uni-i-img">
              <img src={uniIImage} alt="university-inbox-img" />
            </div>
            <div className="side">
              <h1>Indian University</h1>
              <p>
                We are excited to inform you that you have been shortlisted to
                study computer engineering
              </p>
              <p>in Indian university...</p>
            </div>
          </div>
          <div className="uni-inbox">
            <div className="uni-i-img">
              <img src={uniIImage} alt="university-inbox-img" />
            </div>
            <div className="side">
              <h1>Indian University</h1>
              <p>
                We are excited to inform you that you have been shortlisted to
                study computer engineering
              </p>
              <p>in Indian university...</p>
            </div>
          </div>
          <div className="uni-inbox">
            <div className="uni-i-img">
              <img src={uniIImage} alt="university-inbox-img" />
            </div>
            <div className="side">
              <h1>Indian University</h1>
              <p>
                We are excited to inform you that you have been shortlisted to
                study computer engineering
              </p>
              <p>in Indian university...</p>
            </div>
          </div>
          <div className="uni-inbox">
            <div className="uni-i-img">
              <img src={uniIImage} alt="university-inbox-img" />
            </div>
            <div className="side">
              <h1>Indian University</h1>
              <p>
                We are excited to inform you that you have been shortlisted to
                study computer engineering
              </p>
              <p>in Indian university...</p>
            </div>
          </div>
          <div className="uni-inbox">
            <div className="uni-i-img">
              <img src={uniIImage} alt="university-inbox-img" />
            </div>
            <div className="side">
              <h1>Indian University</h1>
              <p>
                We are excited to inform you that you have been shortlisted to
                study computer engineering
              </p>
              <p>in Indian university...</p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="article-card">
            <div className="article-img">
              <img src={articleImg} alt="article-img" />
            </div>

            {/* <div className="article-text"> */}
            <span>We help keep you up to date on your</span>
            <span>application</span>
            {/* </div> */}

            <button>Get Connected</button>
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
            <button>Get Connected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

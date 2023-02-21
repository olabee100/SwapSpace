import "./WebinarIndex.css";
import vImg1 from "../../../assets/School/images/video-image1.png";
import vImg2 from "../../../assets/School/images/video-image2.png";
import vImg3 from "../../../assets/School/images/video-image3.png";

const WebinarIndex = () => {
  return (
    <div className="webinar-index school">
      <div className="video-top-wrap">
        <div className="v-card">
          <div className="for-v">
            <video src="" controls poster={vImg1}></video>
          </div>
          <h3>How to study MBA abroad</h3>
          <p>By Thomas Hugges</p>
          <button>Register</button>
        </div>
        <div className="v-card">
          <div className="for-v">
            <video src="" controls poster={vImg2}></video>
          </div>
          <h3>How to study MBA abroad</h3>
          <p>By Thomas Hugges</p>
          <button>Watch</button>
        </div>
        <div className="v-card">
          <div className="for-v">
            <video src="" controls poster={vImg3}></video>
          </div>
          <h3>How to study MBA abroad</h3>
          <p>By Thomas Hugges</p>
          <button>Register</button>
        </div>
      </div>

      <h2>Most Viewed Webinar</h2>

      <div className="video-bottom-wrap">
        <div className="v-card">
          <div className="for-v">
            <video src="" controls poster={vImg2}></video>
          </div>
          <h3>How to study MBA abroad</h3>
          <p>By Thomas Hugges</p>
          <button>Watch</button>
        </div>
        <div className="v-card">
          <div className="for-v">
            <video src="" controls poster={vImg2}></video>
          </div>
          <h3>How to study MBA abroad</h3>
          <p>By Thomas Hugges</p>
          <button>Watch</button>
        </div>
        <div className="v-card">
          <div className="for-v">
            <video src="" controls poster={vImg2}></video>
          </div>
          <h3>How to study MBA abroad</h3>
          <p>By Thomas Hugges</p>
          <button>Watch</button>
        </div>
      </div>
    </div>
  );
};

export default WebinarIndex;

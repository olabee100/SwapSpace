import "./GmatPage.css";
import articleImg from "../../../assets/School/icons/article-image.svg";
import vidImg from "../../../assets/School/images/vid-image.png";

const GmatPage = () => {
  return (
    <div className="gmat-page">
      <h1>
        GMAT online learning provide you useful materials to help you get
        started
      </h1>

      <div className="article">
        <p>Article</p>

        <div className="cards-wrap">
          <div className="article-card">
            <div className="article-img">
              <img src={articleImg} alt="article-img" />
            </div>

            {/* <div className="article-text"> */}
            <span>12 tips to help you prepare for your</span>
            <span>GMAT exam</span>
            {/* </div> */}
          </div>
          <div className="article-card">
            <div className="article-img">
              <img src={articleImg} alt="article-img" />
            </div>

            {/* <div className="article-text"> */}
            <span>12 tips to help you prepare for your</span>
            <span>GMAT exam</span>
            {/* </div> */}
          </div>
          <div className="article-card">
            <div className="article-img">
              <img src={articleImg} alt="article-img" />
            </div>

            {/* <div className="article-text"> */}
            <span>12 tips to help you prepare for your</span>
            <span>GMAT exam</span>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="gmat-videos">
        <p>Videos</p>

        <div className="cards-wrap">
          <div className="video-card">
            <div className="guide">
              <span>GMAT Examination Guide</span>
            </div>
            <div className="below-guide">
              <div>
                <div className="vid-img">
                  <img src={vidImg} alt="vid-img" />
                </div>
                <span>EduGlobe</span>
              </div>
              <span className="views">12000 views</span>
            </div>
          </div>
          <div className="video-card">
            <div className="guide">
              <span>GMAT Examination Guide</span>
            </div>
            <div className="below-guide">
              <div>
                <div className="vid-img">
                  <img src={vidImg} alt="vid-img" />
                </div>
                <span>EduGlobe</span>
              </div>
              <span className="views">12000 views</span>
            </div>
          </div>
          <div className="video-card">
            <div className="guide">
              <span>GMAT Examination Guide</span>
            </div>
            <div className="below-guide">
              <div>
                <div className="vid-img">
                  <img src={vidImg} alt="vid-img" />
                </div>
                <span>EduGlobe</span>
              </div>
              <span className="views">12000 views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmatPage;

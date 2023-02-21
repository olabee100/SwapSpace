// import images

import boy from "../../assets/Home/images/boy.png";
import plane from "../../assets/Home/images/plane.png";
import sphere from "../../assets/Home/images/sphere.png";

const Stats = () => {
  return (
    <div className="stat-box">
      <div className="stats">
        <div>
          <img src={boy} alt="" />
          <h1 style={{ marginTop: "20px" }}>7000+</h1>
          <h3>Students Trained</h3>
        </div>
        <div>
          <img src={plane} alt="" style={{ transform: "translateY(25px)" }} />
          <h1 style={{ marginTop: "60px" }}>1000+</h1>
          <h3>Students Sent Abroad</h3>
        </div>
        <div>
          <img src={sphere} alt="" style={{ transform: "translateY(20px)" }} />
          <h1 style={{ marginTop: "55px" }}>12</h1>
          <h3>
            Countries Around the <br /> world
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;

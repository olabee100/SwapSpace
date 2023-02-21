// import images
import university from "../../assets/Home/images/university.png";
import computerRoom from "../../assets/Home/images/computer-room.png";

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="facilities-row">
        <div className="facilities-col">
          <div>
            <img src={university} alt="" />
          </div>
          <div className="facilities-info">
            <h3>Study In top universities around the world</h3>
            <p>
              We believe in your dreams and we strive hard to make your dreams
              come true.
            </p>
          </div>
        </div>
        <div className="facilities-col">
          <div>
            <img src={computerRoom} alt="" />
          </div>
          <div className="facilities-info">
            <h3 style={{ marginBottom: "33px" }}>
              Meet Expert around the world
            </h3>
            <p>
              great webinar with top expert to set and <br /> guide you on your
              career path. <br />
              JOIN US NOW
            </p>
          </div>
        </div>
        <div className="facilities-col">
          <div>
            <img src={university} alt="" />
          </div>
          <div className="facilities-info">
            <h3>Study In top universities around the world</h3>
            <p>
              We believe in your dreams and we strive hard to make your dreams
              come true.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

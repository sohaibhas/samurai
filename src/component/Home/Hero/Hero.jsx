import React from "react";
import "../../style.css";

const Hero = () => {
  return (
    <div className="container w-100 justify-content-between d-flex mb-5">
      <div
        className="container1 w-50"
        style={{
          marginRight: "20px",
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2013/10/17/18/20/believe-197091_960_720.jpg"
          class="d-block w-100"
          alt="..."
          style={{
            height: "500px",
            objectFit: "cover",
            marginRight: "100px",
            width:"100px"
          }}
        />
        <p className="bottom-center">Official Merchandise</p>
        <h3 className="bottom-center1">Rugby Jerseys</h3>
        <button type="button" class="btn btn-light bottom-center2">
          Shop Now
        </button>
      </div>
      <div className="container1 w-50" style={{
          marginLeft:"20px"
        }}>
        <img
          src="https://cdn.pixabay.com/photo/2016/07/13/16/00/box-1514845__340.jpg"
          class="d-block w-100"
          alt="..."
          style={{
            height: "500px",
            objectFit: "cover",
            marginRight: "70px",
            marginLeft: "-20px",
          }}
        />
        {/* <p className="bottom-center">Official Merchandise</p> */}
        <h3 className="bottom-center1 w-100">Upto 70% off Outlet</h3>
        <button type="button" class="btn btn-light bottom-center2">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Slider from "../Home/Slider/Slider";
import Hero from "../Home/Hero/Hero";
import Hero1 from "../Home/Hero/Hero1";
import Partner from "./Partner/Partner";


const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height:'500px'}} data-bs-interval="1000">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/05/00/14/store-6916198_960_720.jpg"
              className="d-block w-100"
              alt="..."
              style={{height:'500px',objectFit:'cover'}}
            />
            <div className="carousel-caption d-none d-md-block mb-2">
              <h1 className="text-uppercase">
                Wear yoour Color with pride
              </h1>
              <button type="button" className="btn btn-light btn-lg text-uppercase m-4">
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item" style={{height:'500px'}} data-bs-interval="2000">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/20/21/18/fashion-store-732263_960_720.jpg"
              className="d-block w-100"
              alt="..."
              style={{height:'500px',objectFit:'cover'}}
            />
            <div className="carousel-caption d-none d-md-block mb-2">
              <h1 className="text-uppercase">push forward capsule 002</h1>
              <button type="button" className="btn btn-light btn-lg m-4">
                Shop Mens
              </button>
              <button type="button" className="btn btn-light btn-lg">
                Shop Womens
              </button>
            </div>
          </div>
          <div className="carousel-item" style={{height:'500px'}}>
            <img
              src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428615_960_720.jpg"
              className="d-block w-100"
              alt="..."
              style={{height:'500px',objectFit:'cover'}}
            />
            <div className="carousel-caption d-none d-md-block" style={{marginBottom:'10  0px'}}>
              <h1 className="text-uppercase">Ellite Essentials Collection</h1>
              <button type="button" className="btn btn-light btn-lg m-4">
                Shop Mens
              </button>
              <button type="button" className="btn btn-light btn-lg">
                Shop Womens
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Slider />
      <Hero />
      <Hero1 />
      <Partner />
    </div>
  );
};

export default Home;

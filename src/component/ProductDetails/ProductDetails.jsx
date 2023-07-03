import React, { useState } from "react";
import jeansImage from "../../assests/cap.jpg";
import jeansImage1 from "../../assests/1.jpg";
import jeansImage2 from "../../assests/2.jpg";
import jeansImage3 from "../../assests/4.jpg";
import ".././styl.css";
const ProductDetails = () => {
  const images = [
    jeansImage,
    jeansImage1,
    jeansImage2,
    jeansImage,
    jeansImage,
    jeansImage3,
    jeansImage,
    jeansImage,
    jeansImage,
    jeansImage,
  ];
  const [selectedSize, setSelectedSize] = useState("");
  const handleClick = (size) => {
    setSelectedSize(size);
  };
  const [showParagraph, setShowParagraph] = useState(false);
  const handleButtonClick = () => {
    setShowParagraph(!showParagraph);
  };
  const [showShip, setShowShip] = useState(false);
  const handleButtonClick1 = () => {
    setShowShip(!showShip);
  };
  return (
    <div className="container">
      <div className="d-flex my-5 w-100">
        <div className="gallery-container w-75">
          <img
            src="https://cdn.pixabay.com/photo/2013/10/17/18/20/believe-197091_960_720.jpg"
            class="d-block w-100"
            alt="..."
            style={{
              height: "600px",
              objectFit: "cover",
              marginRight: "100px",
              width: "100px",
              padding: "10px",
              paddingRight: "30px",
            }}
          />
          {images.map((image, index) => (
            <img
              key={index}
              className="gallery-image"
              src={image}
              alt={`Image ${index}`}
            />
          ))}
        </div>
        <div className="w-50" style={{ marginLeft: "10px" }}>
          <h5>Tech Vent Vest - Black</h5> <p>EE:S08 | ELITE ESSENTIALS</p>{" "}
          <h5>£20.83</h5> <h6>Color-Black</h6>
          <div class="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
          </div>
          <h6>Size:</h6>
          <div className="size-buttons">
            <button
              type="button"
              className={
                selectedSize === "S"
                  ? "selected btn border border-black border-2 p-3"
                  : "btn btn-outline-dark p-3"
              }
              onClick={() => handleClick("S")}
              style={{ marginRight: "10px", width: "4rem" }}
            >
              S
            </button>
            <button
              className={
                selectedSize === "M"
                  ? "selected btn border border-black border-2 p-3"
                  : "btn btn-outline-dark p-3"
              }
              onClick={() => handleClick("M")}
              style={{ marginRight: "10px", width: "4rem" }}
            >
              M
            </button>
            <button
              className={
                selectedSize === "L"
                  ? "selected btn border border-black border-2 p-3"
                  : "btn btn-outline-dark p-3"
              }
              onClick={() => handleClick("L")}
              style={{ marginRight: "10px", width: "4rem" }}
            >
              L
            </button>
            <button
              className={
                selectedSize === "XL"
                  ? "selected btn border border-black border-2 p-3"
                  : "btn btn-outline-dark p-3"
              }
              onClick={() => handleClick("XL")}
              style={{ marginRight: "10px", width: "4rem" }}
            >
              XL
            </button>
          </div>
          <button
            type="button"
            class="btn btn-dark w-100"
            style={{ marginTop: "20px", height: "50px" }}
          >
            Add to Cart
          </button>
          <hr />
          <div>
            <h6>Description</h6>
            <div
              style={{
                float: "right",
                marginTop: "-40px",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={handleButtonClick}
            >
              {showParagraph ? "-" : "+"}
            </div>
            {showParagraph && (
              <p>
                Designed to give you the best in support and freedom of
                movement, these Elite Essentials Nylon Shorts are manufactured
                in our 4-Way-Stretch Nylon fabric with additional sweat wicking
                treatment to keep you fresh and ready to train .<br /> -
                Elasticated waistband
                <br />
                - Internal drawcord
                <br />
                - Side split detail
                <br />
                - Zip pockets
                <br />
                - Invisible rear pocket
                <br />
                - Sweat wicking treatment
                <br />
                - Water resistant
                <br />
                - 4-Way-Stretch Nylon
                <br />
                - 82% Nylon / 18% Elastane
                <br />
                - High density SAMURAI branding
                <br />
              </p>
            )}
          </div>
          <hr />
          <h6>Shipping & Returns</h6>
          <div
            style={{
              float: "right",
              marginTop: "-40px",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={handleButtonClick1}
          >
            {showShip ? "-" : "+"}
          </div>
          {showShip && (
            <p>
              Free UK Shipping over £60
              <br />
              We ship worldwide!
              <br />
              Hassle free returns
              <br />
            </p>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;

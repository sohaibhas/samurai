import React, { useState, useEffect, useRef } from "react";
import jeansImage from "../../../assests/cap.jpg";
import jeansImage1 from "../../../assests/1.jpg";
import jeansImage2 from "../../../assests/2.jpg";
import jeansImage3 from "../../../assests/4.jpg";
import jeansImage4 from "../../../assests/3.jpg";
import jeansImage5 from "../../../assests/5.jpg";
import jeansImage6 from "../../../assests/6.jpg";
import jeansImage7 from "../../../assests/7.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/cartSlice";

const Hero1 = () => {
  const dispath = useDispatch();
  const addCart = (image) => {
    dispath(add(image));
  };
  const images = [
    {
      title: "Nylon Shorts-Black",
      tag: "VC: IRL | VINTAGE COLLECTION",
      price: "£45",
      image: jeansImage,
      hoverImage: jeansImage3,
    },
    {
      title: "Man's Tapared Training Pant - Black",
      tag: "VC: IRL | VINTAGE COLLECTION",
      price: "£45",
      image: jeansImage1,
      hoverImage: jeansImage,
    },
    {
      title: "Logo T-Shirt",
      tag: "VC: IRL | VINTAGE COLLECTION",
      price: "£45",
      image: jeansImage2,
      hoverImage: jeansImage3,
    },
    {
      title: "Vintage Rugby Shirt - South Africa",
      tag: "VC: IRL | VINTAGE COLLECTION",
      price: "£45",
      image: jeansImage3,
      hoverImage: jeansImage6,
    },
    {
      title: "Vintage Rugby Shirt - Ireland",
      tag: "VC: IRL | VINTAGE COLLECTION",
      price: "£45",
      image: jeansImage4,
      hoverImage: jeansImage3,
    },
    {
      title: "Another image",
      tag: "VC: IRL | VINTAGE COLLECTION",
      price: "£45",
      image: jeansImage5,
      hoverImage: jeansImage1,
    },
    // Add more images here
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (offset) => {
    if (ref.current) {
      const containerWidth = ref.current.offsetWidth;
      const scrollAmount = ((containerWidth / 2) * offset) / Math.abs(offset);
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      const newIndex = (currentIndex + offset + images.length) % images.length;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleScroll(10);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginBottom: "30px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
          onClick={() => handleScroll(-1)}
          style={{ cursor: "pointer" }}
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>

        <h5 style={{ fontWeight: "bold" }}>Best Sellers</h5>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
          onClick={() => handleScroll(1)}
          style={{ cursor: "pointer" }}
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          height: "500px",
          marginBottom: "50px",
        }}
        ref={ref}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className=""
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <Link to="/product-details" style={{ textDecoration: "none" }}>
              <div className="bg-secondary-subtle">
                <img
                  key={index}
                  src={hoveredImage === index ? image.hoverImage : image.image}
                  alt={`Jeans ${index + 1}`}
                  style={{
                    height: "18rem",
                    width: "18rem",
                    objectFit: "cover",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div class="card-body pt-2" style={{ color: "black" }}>
                <h6 class="card-title">{image.title}</h6>
                <p class="card-text pt-1" style={{ fontSize: "0.8rem" }}>
                  {image.tag}
                </p>
                <p class="card-text">{image.price}</p>
              </div>
            </Link>
            <button className="btn btn-dark" onClick={() => addCart(image)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero1;

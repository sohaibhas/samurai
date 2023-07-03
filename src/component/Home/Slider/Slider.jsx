import React, { useState, useEffect, useRef } from "react";
import jeansImage from "../../../assests/cap.jpg";
import jeansImage1 from "../../../assests/1.jpg";
import jeansImage2 from "../../../assests/2.jpg";
import jeansImage3 from "../../../assests/4.jpg";
import jeansImage4 from "../../../assests/7.jpg";
import jeansImage5 from "../../../assests/6.jpg";
import jeansImage6 from "../../../assests/5.jpg";
import jeansImage7 from "../../../assests/3.jpg";

import "../../styl.css";

const Slider = () => {
  const images = [
    {
      collection: "Official Merchandise",
      image: jeansImage,
    },
    {
      collection: "Official Merchandise",
      image: jeansImage1,
    },
    {
      collection: "Official Merchandise",
      image: jeansImage2,
    },
    {
      collection: "Official Merchandise",
      image: jeansImage3,
    },
    {
      collection: "Ellite Essentials",
      image: jeansImage4,
    },
    {
      collection: "Rugby Heritage Collection",
      image: jeansImage5,
    },
    {
      collection: "Push Forward Capsule 002",
      image: jeansImage6,
    },
    {
      collection: "Vintage Rugby Capsule",
      image: jeansImage7,
    },
    {
      collection: "Vintage Rugby Capsule",
      image: jeansImage1,
    },
    {
      collection: "Vintage Rugby Capsule",
      image: jeansImage2,
    },
    {
      collection: "Vintage Rugby Capsule",
      image: jeansImage,
    },
    {
      collection: "Core",
      image: jeansImage3,
    },
    // Add more images here
  ];

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
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
          onClick={() => handleScroll(-1)}
          style={{ cursor: "pointer" }}
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>

        <h5 style={{ fontWeight: "bold" }}>Shop by collection </h5>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
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
          gap: "50px",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          height: "250px",
        }}
        ref={ref}
      >
        {images.map((image, index) => (
          <div>
            <img
              key={index}
              src={image.image}
              alt={`Jeans ${index + 1}`}
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid blue",
              }}
              className="image_slide"
              onMouseOver={(e) => (e.target.style.borderColor = "red")}
              onMouseOut={(e) => (e.target.style.borderColor = "blue")}
            />
            <p
              className=" my-2"
              style={{
                fontSize: "0.8rem",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {image.collection}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

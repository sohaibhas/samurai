import React from "react";
import { Link } from "react-router-dom";

const Foot = () => {
  const options = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "United States", value: "United Stated" },
    { label: "United Arab Emirates", value: "United Arab Emirates" },
  ];
  return (
    <div
      className="bg-black text-white"
      style={{ height: "200px", padding: "100px", marginTop: "5px" }}
    >
      <div className="">
        <select
          className="my-1"
          style={{
            height: "50px",
            width: "200",
            padding: "10px",
          
            boxShadow: "none",
            backgroundColor: "White",
            color: "black",
            fontSize: "1rem",
          }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value} style={{ color: "black" }}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Foot;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
  
    const userData = {
      name,
      email,
      password,
    };
  
    // Dispatch the register action and wait for it to finish
    await dispath(register(userData));
    window.location.reload();
  
    // Check for the token in local storage
    const token = localStorage.getItem('user');
    if(token){
      navigate("/");
    }
  };
  
  return (
    <div className="container ">
      <div className="align-items-center d-flex flex-column p-5">
        <h2 className="" style={{ fontWeight: "bold" }}>
          Create Account
        </h2>
        <div className="d-flex flex-column p-3" style={{}}>
          <label className="py-2">First Name</label>
          <input
            type="text"
            name="firstname"
            value={name}
            style={{ width: "420px", height: "50px" }}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="py-2">Last Name</label>
          <input
            type="text"
            name="lastname"
            style={{ width: "420px", height: "50px" }}
          />
          <label className="py-2">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            style={{ width: "420px", height: "50px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="py-2">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            style={{ width: "420px", height: "50px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="py-2 w-50 px-5" style={{}}>
          <button
            className="btn btn-dark btn-lg text-uppercase"
            style={{
              borderRadius: "0.2rem",
              width: "100px",
              fontSize: "0.8rem",
              marginBottom: "20px",
            }}
            onClick={handleSubmit}
          >
            Create
          </button>
          <p>Log in with an existing account or Return to Store</p>
        </div>
      </div>
    </div>
  );
};

export default Register;

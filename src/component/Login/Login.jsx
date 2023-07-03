import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../Redux/authSlice";

const Login = () => {
  const dispath = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    await dispath(login(userData));
    window.location.reload();
  };

  return (
    <div className="container ">
      <div className="align-items-center d-flex flex-column p-5">
        <h2 className="" style={{ fontWeight: "bold" }}>
          Login
        </h2>
        <div className="d-flex flex-column p-3" style={{}}>
          <label className="py-2">Email</label>
          <input
            type="email"
            name="email"
            style={{ width: "420px", height: "50px" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="py-2">Password</label>
          <input
            type="password"
            name="password"
            style={{ width: "420px", height: "50px" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>Forgot your password</p>
        </div>
        <div
          className="d-flex justify-content-between py-2 w-50 px-5"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <button
            className="btn btn-dark btn-lg text-uppercase"
            style={{
              borderRadius: "0.2rem",
              width: "100px",
              fontSize: "0.8rem",
            }}
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <Link className="nav-link" to="/account/register/">
            <p>Create account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import axios from "axios";
import { toast } from 'react-toastify';

const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      userData
    );
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
      console.log(response.data.token);
    }
  } catch (error) {
    alert(error.response.data);
    console.log(error.response.data);
    console.log(userData);
    console.log("Error Occured by me");
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      userData
    );
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    alert(error.response.data);
    console.log(error);
    console.log("Error Occured by me");
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

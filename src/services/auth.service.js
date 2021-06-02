import axios from "axios";

const API_URL = "http://ams.muadi.com.vn/api/user/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password, agentcode, hashcode) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
      agentcode,
      hashcode
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};

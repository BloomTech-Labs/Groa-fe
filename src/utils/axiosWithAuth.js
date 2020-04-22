import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/api/users",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
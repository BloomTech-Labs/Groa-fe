import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // it appears that if we use dev.groa.us filter doesn't work, but if we use
  // api.groa.us filter works and watchlist does not work.
  return axios.create({
    baseURL: "https://dev.groa.us/api/users",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
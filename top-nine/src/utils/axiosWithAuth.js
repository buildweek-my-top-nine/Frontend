import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://cameron-mytopnine.herokuapp.com",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};
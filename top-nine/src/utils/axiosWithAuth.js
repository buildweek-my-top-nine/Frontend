import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://buildweek--top-nine.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
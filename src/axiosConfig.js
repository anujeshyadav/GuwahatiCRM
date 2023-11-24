import axios from "axios";

const instance = axios.create({
  baseURL: "http://64.227.162.41:5000/",
  // baseURL: "http://65.0.96.247:8000/",
});

export default instance;

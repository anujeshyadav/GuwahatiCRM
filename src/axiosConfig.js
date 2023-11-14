import axios from "axios";

const instance = axios.create({
  baseURL: "http://65.0.96.247:8000/",
  // baseURL: "http://65.0.96.247:8000/",
});

export default instance;

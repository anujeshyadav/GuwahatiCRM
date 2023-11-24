import axios from "axios";

const instance = axios.create({
  baseURL: "http://64.227.162.41:5000/",
});

export default instance;

/** @format */

import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080/LoopBack/src/",
  baseURL: "http://192.168.1.9:8080/LoopBack/src/",
});

export default instance;

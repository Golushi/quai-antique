import axios from "axios";

const instance = axios.create({
  baseURL: "http://http://localhost:3001/",
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;

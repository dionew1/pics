import axios from "axios";
import secret from "./Secret";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${secret}`,
  },
});

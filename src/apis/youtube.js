import axios from "axios";

const KEY = "AIzaSyChS7scNx58AB9hswnyJPG2iYaXfxujhRo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

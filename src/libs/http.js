import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    // 파일업로드시에는 다르게 설정함
  },
  withCredentials: false, // 기본값 false 인증정보에 대하여
});

export default http;

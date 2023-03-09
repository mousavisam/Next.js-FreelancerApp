import axios from "axios";
import queryString from "query-string";

const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default HttpClient;

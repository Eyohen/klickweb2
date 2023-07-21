import axios from "axios";

const URL = import.meta.env.REACT_APP_URL;

export const http = axios.create({ baseURL: URL });

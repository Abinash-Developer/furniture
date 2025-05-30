import axios from "axios";
import Cookies from 'js-cookie'; // If using js-cookie
const API_URL = 'http://localhost:8000/api/';
const csrfToken = Cookies.get('csrftoken') || document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const axiosInstance = axios.create({
  headers: {
    'X-CSRF-TOKEN': csrfToken,
  },
  withCredentials: true
});
export const userLogin = (userData)=>(axiosInstance.post(`${API_URL}login`,userData));
export const fetchCraftProducts = ()=>(axios.get(`${API_URL}craftedProducts`));
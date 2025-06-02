import axios from "axios";
import Cookies from 'js-cookie';
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
export const customerAddTocart = (product_id)=>(axios.get(`${API_URL}add-to-cart/${product_id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('authToken')}`}}));
export const getCartCount = ()=>(axios.get(`${API_URL}cart-count`,{headers:{Authorization:`Bearer ${localStorage.getItem('authToken')}`}}));
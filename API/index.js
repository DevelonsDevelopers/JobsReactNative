import axios from 'axios'

const API = axios.create({ baseURL: 'http://192.168.1.5:5001'})


//CATEGORIES API CALL ============================
export const fetchAllCategories = () => API.get(`/categories/all`)

import axios from 'axios'

const API = axios.create({ baseURL: 'http://192.168.1.25:5001'})

export const register = (name, username, email, phone, address, dob, gender, password) => API.post(`/seekerAuth/register`, {
    name: name,
    username: username,
    email: email,
    phone: phone,
    address: address,
    dob: dob,
    gender: gender,
    password: password,
})

export const login = (email, password) => API.post('/seekerAuth/login', {
    email: email,
    password: password
})

//CATEGORIES API CALL ============================
export const fetchAllCategories = () => API.get(`/categories/all`)

//SEEKERS API CALL ===============================
export const fetchSeeker = () => API.get(`/seekers/get`)

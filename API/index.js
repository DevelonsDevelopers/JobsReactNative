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
export const fetchSeeker = (id) => API.post('/seekers/get', { id: id })
export const updateSeeker = (name, city, country, username, phone, address, dob, gender, id) => API.put('/seekers/update',  {
    name: name,
    city: city,
    country: country,
    username: username,
    phone: phone,
    address: address,
    dob: dob,
    gender: gender,
    id: id
})


//CITIES API CALL
export const fetchAllCities = () => API.get(`/cities/all`)

export const fetchAllCountries = () => API.get('/countries/all')

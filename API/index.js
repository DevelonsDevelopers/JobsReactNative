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

export const google = (name, username, email, phone ,address, dob, gender, password) => API.post(`/seekerAuth/google`, {
    name: name,
    username: username,
    email: email,
    phone: phone,
    address: address,
    dob: dob,
    gender: gender,
    password: password,
})

export const changePassword = (password, id) => API.post('/seekerAuth/password', {
    password: password,
    id: id
})

export const registerProvider = (name, size, city, country, email, phone, address, headquater, type, password) => API.post('/providerAuth/register', {
    name: name,
    size: size,
    city: city,
    country: country,
    email: email,
    phone: phone,
    address: address,
    headquater: headquater,
    type: type,
    password: password
})

export const loginProvider = (email, password) => API.post('/providerAuth/login', {
    email: email,
    password: password
})

//APPLIED API CALL ==============================
export const applyJob = (job, user, date, proposal) => API.post('/applied/create', {
    job: job,
    user: user,
    date: date,
    proposal: proposal
})
export const appliedJobs = (user) => API.post('/applied/user', { user: user })
export const appliedJob = (user, job) => API.post('/applied/job', { user: user, job: job })
export const appliedByCompany = (company) => API.post('/applied/company', { company: company })


//CATEGORIES API CALL ============================
export const fetchAllCategories = () => API.get(`/categories/all`)
export const fetchFeaturedCategories = () => API.get(`/categories/featured`)


//SEEKERS API CALL ===============================
export const fetchSeeker = (id) => API.post('/seekers/get', { id: id })
export const fetchRecommendedUsers = (job) => API.post('/seekers/recommended', { job: job })
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
export const verifySeeker = (verify, phone, id) => API.put('/seekers/verify', {
    verify: verify,
    phone: phone,
    id: id,
})


//CITIES API CALL
export const fetchAllCities = () => API.get(`/cities/all`)


//COUNTRIES API CALL
export const fetchAllCountries = () => API.get('/countries/all')


//COMPANIES API CALL
export const fetchAllCompanies = () => API.get('/companies/all')

export const completeCompany = (country, city, phone, headquater, type, id) => API.put('/companies/complete', {
    country: country,
    city: city,
    phone: phone,
    headquater: headquater,
    type: type,
    id: id
})

//JOBS API CALL
export const fetchAllJobs = (user) => API.post('/jobs/all', { user: user })
export const fetchRecentJobs = () => API.get('/jobs/recent')
export const fetchRecommendedJobs = (user, tag) => API.post('/jobs/recommended', { user: user, tag: tag })
export const fetchJobByID = (user, id) => API.post('/jobs/get', { user: user, id: id })
export const fetchJobByCategory = (user, id) => API.post('/jobs/category', { user: user, category: id })
export const fetchJobByCity = (user, id) => API.post('/jobs/city', { user: user, city: id })
export const fetchJobByCompany = (id) => API.post('/jobs/company', {company: id })
export const fetchSearchJob = (search, country, category, city, company, salaryStart, salaryEnd, type, isCountry, isCategory, isCity, isCompany, isSalary, isType) => API.post('/jobs/search', {
    search: search,
    country: country,
    category: category,
    city: city,
    company: company,
    salaryStart: salaryStart,
    salaryEnd: salaryEnd,
    type: type,
    isCountry: isCountry,
    isCategory: isCategory,
    isCity: isCity,
    isCompany: isCompany,
    isSalary: isSalary,
    isType: isType,
})


//INTERACTIONS API CALL
export const recordInteraction = (job, user, query, title, interactiontype) => API.post('/interactions/create', {
    job: job,
    user: user,
    query: query,
    title: title,
    interactiontype: interactiontype
})
export const fetchInteractionsByUser = (user) => API.post('/interactions/user', { user: user })


//CV API CALL
export const fetchCVByUser = (user) => API.post('/cv/user', { user: user })
export const createCover = (user, job, date, role, intro, body) => API.post('/cover/create', {
    user: user,
    job: job,
    date: date,
    role: role,
    intro: intro,
    body: body
})
export const cvStatement = (id, statement) => API.post('/cv/statement', {
    id: id,
    statement: statement
})
export const addCVEducation = (cv, qualification, timeperiod, institute) => API.post('/cvEducation/create', {
    cv: cv,
    qualification: qualification,
    timeperiod: timeperiod,
    institute: institute
})
export const addCVCareer = (cv, company, job, timeperiod, address, phone) => API.post('/cvCareer/create', {
    cv: cv,
    company: company,
    job: job,
    timeperiod: timeperiod,
    address: address,
    phone: phone
})
export const addCVCourse = (cv, course, timeperiod, institute) => API.post('/cvCourse/create', {
    cv: cv,
    course: course,
    timeperiod: timeperiod,
    institute: institute
})
export const addCVInterest = (cv, interest) => API.post('/cvInterest/create', {
    cv: cv,
    interest: interest
})
export const addCVLanguage = (cv, language) => API.post('/cvLanguage/create', {
    cv: cv,
    language: language
})
export const addCVResume = (cv, resume) => API.post('/cvResume/create', {
    cv: cv,
    resume: resume
})
export const addCVSkill = (cv, skill) => API.post('/cvSkill/create', {
    cv: cv,
    skill: skill
})


//TAGS API CALL
export const fetchtopTags = (user) => API.post('/tags/top', {
    user: user
})

//BOOKMARKS API CALL
export const fetchBookmarks = (user) => API.post('/bookmarks/all', { user: user })
export const bookmarkJob = (job, user) => API.post('/bookmarks/add', { job: job, user: user })
export const removeBookmark = (id) => API.delete('/bookmarks/remove', { data: { id: id }})

//OFFERS API CALL
export const sendOffer = (job, user, offerType, offer, offerStatus, date) => API.post('/offers/create', {
    job: job,
    user: user,
    offerType: offerType,
    offer: offer,
    offerStatus: offerStatus,
    date: date
})
export const sentOffers = (id) => API.post('/offers/company', {
    company: id
})
export const sentOffersByJob = (id) => API.post('/offers/job', {
    job: id
})

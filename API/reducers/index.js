import { combineReducers } from "redux";

import category from './category'
import register from './register'
import login from './login'
import seeker from './seeker'

export default combineReducers({ category, register, login, seeker })

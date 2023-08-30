import { combineReducers } from "redux";

import category from './category'
import register from './register'
import login from './login'
import seeker from './seeker'
import city from './city'
import country from './country'
import company from "./company";
import job from "./job";
import cv from "./cv";
import tag from "./tag";
import interactions from "./interactions";

export default combineReducers({ category, register, login, seeker, city, country, company, job, cv, tag, interactions })

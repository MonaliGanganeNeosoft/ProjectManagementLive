import axios from 'axios'
import {MAIN_URL} from './Url';

export function registerService(data){
    return axios.post(`${MAIN_URL}user/registerService`,data)
}

export function loginService(data){
    return axios.post(`${MAIN_URL}user/loginService`,data)
}
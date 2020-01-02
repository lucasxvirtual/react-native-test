import axios from 'axios';
import { baseUrl } from '../config'
import Singleton from '../utils/singleton';

getApi = () => {
    const Api = axios.create({
        baseURL: baseUrl
    })
    Api.interceptors.request.use(function (config) {
        const token = Singleton.sharedInstance.token
        if(token != null)
            config.headers.Authorization =  'Token ' + token.token;
    
        return config;
    });
    return Api
}

const Api = getApi

export default Api

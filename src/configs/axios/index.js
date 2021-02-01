import axios from 'axios'
import errorHandler from './errorHandler'

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
}) // https://api.bwamicro.com/ // http://micro-service.my.id/

instance.interceptors.response.use( (response) => response.data, errorHandler)

export default instance;
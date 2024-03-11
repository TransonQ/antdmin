import axios, { AxiosInstance } from 'axios'
import {
  requestErrorHandler,
  requestHandler,
  responseErrorHandler,
  responseHandler,
} from './interceptor.handlers'

// 创建axios实例
const ax: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE, //TODO - 根据实际情况配置
})

// 请求拦截器
ax.interceptors.request.use(requestHandler, requestErrorHandler)

// 响应拦截器
ax.interceptors.response.use(responseHandler, responseErrorHandler)

export { ax }

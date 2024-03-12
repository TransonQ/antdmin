import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { cookieScope } from '~/utils'

// 请求预处理
export const requestHandler = (config: InternalAxiosRequestConfig) => {
  const token = cookieScope.getToken()
  const tenantId = cookieScope.getTenantId()

  if (token) {
    config.headers.Authorization = token // 请求携带 token
  }

  if (tenantId) {
    config.headers['x-tenant-id'] = tenantId //TODO - 确认键名
  }

  return config
}

// 响应预处理
export const responseHandler = (response: AxiosResponse) => {
  //TODO - 需求确认
  if (response.config.responseType === 'blob') {
    /**
     * 二进制流的情况可能需要从 response.headers 获取文件名字, 看后端怎么设计
     * 所以此处需要返回完整的 axios.response
     */
    return response
  }

  return response.data
}

// ---------------------------Error handing--------------------------------
// 通用处理请求错误
export const requestErrorHandler = (error: AxiosError) => {
  console.error('请求拦截器发生错误', error)
  return Promise.reject(error)
}

// 通用处理响应错误
export const responseErrorHandler = (error: AxiosError) => {
  //TODO - 确认拦截错误处理
  /**
   * 关于直接取 error?.response 的情况说明
   * 一般后端返回错误相关的详细标识或者信息,比如:
   * { code: 401, reason: 'VALIDATION_FAILED', message: 'xxx' }
   * 因为当相同类型错误需要细化反馈的情况, 额外的标识是非常必需的.
   *
   * 如果后端规范里面不需要额外的信息,直接给 http 错误响应码或者错误信息在响应头之类的
   * 请返回完整的 error
   * return Promise.reject(error)
   */

  return Promise.reject(error?.response || error)
}

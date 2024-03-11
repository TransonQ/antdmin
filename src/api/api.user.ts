import { ax } from './interceptor.instance.ax';

// login
export type LoginData = { username: string; password: string }
export const postLogin = (data: LoginData): any => {
  return ax.request({
    method: 'post',
    url: '/api/login',
    data,
  })
}

// logout
export const postLogout = (): any => {
  return ax.request({
    method: 'post',
    url: '/api/logout',
  })
}

// get user
export const getUser = (): any => {
  return ax.request({
    method: 'get',
    url: '/api/user',
  })
}

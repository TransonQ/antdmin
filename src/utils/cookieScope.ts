import Cookies from 'js-cookie'

// https://github.com/js-cookie/js-cookie
const jsCookieConfig = (): Cookies.CookieAttributes => {
  return {
    // domain: extractSubdomain(window.location.hostname), //TODO - 可选的, 用于子域名共享 cookie
  }
}

//TODO - 确认存储键名
export const cookieScope = {
  // token
  getToken: () => Cookies.get('Authorization'),
  setToken: (token: string) =>
    Cookies.set('Authorization', token, jsCookieConfig()),
  removeToken: () => Cookies.remove('Authorization', jsCookieConfig()),

  // tenantId
  getTenantId: () => Cookies.get('antdmin-tenant-id'),
  setTenantId: (tenantId: string) =>
    Cookies.set('antdmin-tenant-id', tenantId, jsCookieConfig()),
  removeTenantId: () => Cookies.remove('antdmin-tenant-id', jsCookieConfig()),
}

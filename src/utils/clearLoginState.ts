import { clearSWRCache, cookieScope } from '.'

export const clearLoginState = async () => {
  clearSWRCache()
  cookieScope.removeToken()
  window.location.replace('/login')
}

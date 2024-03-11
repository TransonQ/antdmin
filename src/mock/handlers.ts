import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

const login = http.post('/api/login', async () => {
  return HttpResponse.json({
    token: `_ANTDMIN_${faker.string.uuid()}`,
  })
})

const logout = http.post('/api/logout', () => {
  return HttpResponse.json({})
})

const user = http.get('/api/user', ({ cookies }): any => {
  console.log('cookies: ', cookies)

  if (!cookies.Authorization) {
    return HttpResponse.json({ code: 'Not Authorized' }, { status: 401 })
  }

  return HttpResponse.json({
    id: faker.number.int(),
    name: faker.internet.userName(),
  })
})

export const handlers = [
  // mock interceptor
  login,
  logout,
  user,
]

import { Outlet, RouteObject } from 'react-router-dom'
import { Fallback404 } from '~/fallback/404'
import { Fallback500 } from '~/fallback/500'
import { Home } from '~/pages/home'
import { Login } from '~/pages/login'
import { Role } from '~/pages/role'
import { AppLayout } from '../layout'
import { Root } from '../pages/root'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Fallback404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/app',
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Fallback500 />,
      },
      {
        path: '/app/home',
        element: <Home />,
      },
      {
        path: '/app/role',
        element: <Role />,
      },
      {
        path: '/app/user',
        element: <div>user</div>,
      },
      {
        path: '/app/user/edit',
        element: <div>同类路由左侧默认选中</div>,
      },
      {
        path: '*',
        element: <Fallback404 />,
      },
    ],
  },
]

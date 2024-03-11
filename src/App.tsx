import { App as AntdApp, ConfigProvider, Spin } from 'antd'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { useThemeConfig } from './hooks'
import { routes } from './routes'

const router = createBrowserRouter(routes)

function App() {
  const { themeConfig } = useThemeConfig()

  return (
    <Suspense
      fallback={
        <Spin
          size='large'
          fullscreen
        />
      }
    >
      <SWRConfig
        value={{
          focusThrottleInterval: 5 * 60 * 1000, // 失焦重新验证间隔
        }}
      >
        <ConfigProvider theme={themeConfig}>
          <AntdApp style={{ height: '100%' }}>
            <Toaster position='bottom-center' />
            <RouterProvider router={router} />
          </AntdApp>
        </ConfigProvider>
      </SWRConfig>
    </Suspense>
  )
}

export default App

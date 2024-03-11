import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

// 模拟接口请求
import { browserMocking } from './mock/browserMocking.ts'

browserMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})

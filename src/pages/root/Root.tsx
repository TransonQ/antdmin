import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useUser } from '~/hooks'

export const Root = () => {
  const nav = useNavigate()
  const { userData } = useUser()

  if (userData) {
    nav('/app/home', { replace: true })
  }

  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Spin size='large' />
    </div>
  )
}

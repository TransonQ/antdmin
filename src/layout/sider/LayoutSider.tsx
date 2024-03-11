import {
  FileProtectOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const siderNavigations: MenuProps['items'] = [
  {
    key: '/app/home',
    icon: <HomeOutlined />,
    label: '主页',
  },
  {
    key: '/app/role',
    icon: <FileProtectOutlined />,
    label: '角色管理',
  },
  {
    key: '/app/user',
    icon: <UserOutlined />,
    label: '用户管理',
  },
]

export const LayoutSider = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [navigation, setNavigation] = useState<string[]>([])

  useEffect(() => {
    // 根据当前的 pathname 设置默认选中项
    const startWithNavigationKey = siderNavigations.find((item) =>
      pathname.startsWith(item?.key as string)
    )?.key

    if (startWithNavigationKey) {
      setNavigation([startWithNavigationKey as string])
    } else if (pathname.includes('/app')) {
      setNavigation([siderNavigations[0]?.key as string])
    }
  }, [pathname])

  return (
    <Menu
      mode='inline'
      selectedKeys={navigation}
      style={{ height: '100%', borderRight: 0 }}
      items={siderNavigations}
      onSelect={({ key }) => {
        nav(key)
      }}
    />
  )
}

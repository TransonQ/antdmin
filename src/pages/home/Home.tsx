import { Breadcrumb, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'

export const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={[{ title: 'Home' }]}
      />
      <Content
        style={{
          minHeight: 280,
          height: '100%',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        123
      </Content>
    </>
  )
}

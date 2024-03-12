import { MenuFoldOutlined } from '@ant-design/icons'
import { Flex, Layout, theme } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { LanguageMenu, ProductLogoMenu, UserMenu } from './header'
import { LayoutSider } from './sider'
const { Header, Sider } = Layout

const HeaderNavBox = styled.div`
  width: 100%;
`

// 侧边导航栏宽度
const SiderW = 220
// 侧边导航栏收起按钮宽度
const SiderCollapsedW = 56

const SiderLayoutStyle: React.CSSProperties = {
  overflow: 'auto',
  position: 'fixed',
  left: 0,
  bottom: 0,
  top: 56,
  height: `calc(100vh - 56px - 36px)`, // -headerHeight -triggerHeight
}

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ height: '100%' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.5rem 0 0.5rem',
        }}
      >
        <ProductLogoMenu />
        <HeaderNavBox>
          <Flex
            gap='small'
            align='center'
            justify='end'
            style={{ height: '100%' }}
            wrap='nowrap'
          >
            {/* <ThemeSwitch /> */}
            <LanguageMenu />
            <UserMenu />
          </Flex>
        </HeaderNavBox>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsedWidth={SiderCollapsedW}
          trigger={<MenuFoldOutlined />}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={SiderW}
          style={{
            ...SiderLayoutStyle,
            background: colorBgContainer,
          }}
        >
          <LayoutSider />
        </Sider>

        {/* 内容区域 */}
        <Layout
          style={{
            padding: `0 24px 24px ${
              (collapsed ? SiderCollapsedW : SiderW) + 24
            }px`,
            transition: 'all 0.3s',
            overflowX: 'hidden',
          }}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}

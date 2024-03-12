import { Breadcrumb, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { FilterTag } from '~/components/custom.filter/Filter.Tag'

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
        <FilterTag
          key='1'
          label='Filter tag'
          onRemove={() => {
            console.log('remove')
          }}
        />
      </Content>
    </>
  )
}

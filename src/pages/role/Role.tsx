import { Card, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Page } from '~/components'

export const Role = () => {
  const nav = useNavigate()

  return (
    <Page
      title='角色管理'
      variant='center'
      breadcrumb={[
        {
          content: 'Home',
          onAction: () => nav('/app/home'),
        },
        {
          content: 'An Application',
        },
      ]}
      primaryAction={{
        onAction: () => {},
        content: 'PrimaryText',
      }}
      secondaryAction={{
        onAction: () => {},
        content: 'SecondaryText',
        items: [
          {
            key: '1',
            label: '1st item',
            onClick: () => {},
          },
          {
            key: '2',
            label: '2nd item',
          },
        ],
      }}
    >
      <Row gutter={16}>
        <Col span={16}>
          <Card size='default'>123</Card>
        </Col>
        <Col span={8}>
          <Card size='small'>123</Card>
        </Col>
      </Row>
    </Page>
  )
}

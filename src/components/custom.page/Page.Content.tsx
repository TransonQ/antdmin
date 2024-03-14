import { Col, Row } from 'antd'
import { PageBreakPoint } from '~/config'
import { PageVariant } from './types'

export const PageContent = ({
  variant,
  children,
}: {
  variant?: PageVariant
  children: React.ReactNode
}) => {
  switch (variant) {
    case 'center':
      return (
        <Row justify='center'>
          <Col {...PageBreakPoint}>{children}</Col>
        </Row>
      )
    case 'fullwidth':
    default:
      return <>{children}</>
  }
}

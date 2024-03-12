import { LeftOutlined } from '@ant-design/icons'
import {
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Flex,
  Layout,
  Row,
  Typography,
} from 'antd'
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { PageBreakPoint } from '~/config'

type PageVariant = 'fullwidth' | 'center'

type ActionProps = {
  icon?: React.ReactNode
  danger?: boolean
  content?: React.ReactNode
  onAction?: () => void
}

type PageProps = {
  /** 页面内容 */
  children?: React.ReactNode
  /** 页面标题 */
  title?: string
  /** 页面面包屑导航 */
  breadcrumb?: {
    content: React.ReactNode
    onAction?: () => void
  }[]
  /** 页面顶部主操作按钮 */
  primaryAction?: ActionProps
  /** 页面顶部次操作按钮 */
  secondaryAction?: ActionProps & {
    /** items 是否有更多的菜单 */
    items?: ItemType[]
  }
  /** 页面宽度类型 */
  variant?: PageVariant
  /** 返回按钮点击函数, 如果没有则不显示 */
  backAction?: () => void
  /** 页面顶部标题之后自定义元数据 */
  metaData?: React.ReactNode
}

const PageContent = ({
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

export const Page = ({
  children,
  title,
  breadcrumb,
  primaryAction,
  secondaryAction,
  variant,
  backAction,
  metaData,
}: PageProps) => {
  const breadcrumbList: BreadcrumbItemType[] =
    breadcrumb?.map(({ content, onAction }) => {
      if (!onAction) {
        return {
          title: <span>{content}</span>,
        }
      }
      return {
        title: (
          <a
            onClick={onAction}
            style={{ cursor: 'pointer' }}
          >
            {content}
          </a>
        ),
      }
    }) ?? []

  return (
    <Layout.Content>
      <PageContent variant={variant}>
        <Breadcrumb
          style={{ margin: '16px 0 0' }}
          items={breadcrumbList}
        />
        <Flex
          align='center'
          justify='space-between'
        >
          <Flex
            align='center'
            gap={'small'}
          >
            {backAction && (
              <Button
                type='text'
                icon={<LeftOutlined />}
                onClick={backAction}
              />
            )}
            <Typography.Title
              level={2}
              style={{ margin: '1rem 0' }}
            >
              {title}
            </Typography.Title>
            <div className='Antdmin_Page__metadata'>{metaData}</div>
          </Flex>

          <Flex
            gap={'small'}
            align='center'
          >
            {secondaryAction?.items && secondaryAction?.items.length > 0 ? (
              <Dropdown.Button menu={{ items: secondaryAction.items }}>
                {'SecondaryText'}
              </Dropdown.Button>
            ) : (
              <Button>{'Secondary'}</Button>
            )}

            {primaryAction?.content && (
              <Button
                type='primary'
                icon={primaryAction?.icon}
                danger={primaryAction?.danger}
              >
                {primaryAction?.content}
              </Button>
            )}
          </Flex>
        </Flex>
        {children}
      </PageContent>
    </Layout.Content>
  )
}

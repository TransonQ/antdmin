import { LeftOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Dropdown, Flex, Layout, Typography } from 'antd'
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { PageContent } from './Page.Content'
import { PageLayout } from './Page.Layout'
import { PageProps } from './types'

const Page = ({
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

Page.Layout = PageLayout

export { Page }

import { Avatar, Dropdown, Flex, Typography, theme } from 'antd'
import { useToggle } from 'react-use'
import { postLogout } from '~/api'
import { StyledPress } from '~/components'
import { useUser } from '~/hooks'
import { clearLoginState } from '~/utils'

export const UserMenu = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken()
  const { userData } = useUser()
  const [isActive, toggleIsActive] = useToggle(false)

  return (
    <StyledPress className={isActive ? 'active' : ''}>
      <Dropdown
        trigger={['click']}
        open={isActive}
        onOpenChange={toggleIsActive}
        menu={{
          items: [
            {
              label: '当前租户',
              key: 'setting',
              children: [
                {
                  label: ' AAA',
                  key: 'a',
                },
                {
                  label: 'BBB',
                  key: '',
                },
              ],
            },
            {
              label: '个人中心',
              key: 'account',
            },
            {
              label: '退出登录',
              key: 'logout',
              onClick: async () => {
                await postLogout()
                clearLoginState()
              },
            },
          ],
        }}
      >
        <Flex
          gap={'small'}
          align='center'
          wrap='nowrap'
        >
          <Avatar
            shape='square'
            size={32}
            style={{ backgroundColor: '#FBA81F' }}
          >
            {userData?.name?.slice(0, 1) ?? 'Q'}
          </Avatar>
          <Typography.Paragraph
            style={{ color: colorBgContainer, margin: 0, maxWidth: 120 }}
            ellipsis={{ rows: 1 }}
          >
            {userData?.name}
          </Typography.Paragraph>
        </Flex>
      </Dropdown>
    </StyledPress>
  )
}

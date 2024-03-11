import { TranslationOutlined } from '@ant-design/icons'
import { Dropdown, Flex } from 'antd'
import { useToggle } from 'react-use'
import { StyledPress } from '~/components'

export const LanguageMenu = () => {
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
              label: 'English',
              key: 'en',
            },
            {
              label: '中文(zh-CN)',
              key: 'zh-CN',
            },
          ],
        }}
      >
        <Flex
          gap={'small'}
          align='center'
          wrap='nowrap'
        >
          <TranslationOutlined /> {'中文(zh-CN)'}
        </Flex>
      </Dropdown>
    </StyledPress>
  )
}

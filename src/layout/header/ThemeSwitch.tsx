import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { useEffect } from 'react'
import { useToggle } from 'react-use'
import { StyledPress } from '~/components'
import { useAppTheme } from '~/hooks'

export const ThemeSwitch = () => {
  const [appTheme, setAppTheme] = useAppTheme()
  const [isDark, toggleIsDark] = useToggle(appTheme === 'dark')

  useEffect(() => {
    setAppTheme(isDark ? 'dark' : 'light')
  }, [isDark, setAppTheme])

  return (
    <StyledPress onClick={toggleIsDark}>
      <Flex
        gap={'small'}
        align='center'
        wrap='nowrap'
      >
        <div style={{ padding: '0 0.5rem' }}>
          {isDark ? <SunOutlined /> : <MoonOutlined />}
        </div>
      </Flex>
    </StyledPress>
  )
}

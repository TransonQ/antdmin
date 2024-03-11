import { ThemeConfig, theme } from 'antd'
import { useAppTheme } from './useAppTheme'

export const useThemeConfig = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken()

  const [appTheme] = useAppTheme()
  const isDark = appTheme === 'dark'

  const themeConfig: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#000000',
      colorInfo: '#000000',
      colorSuccess: '#009f5d',
      colorWarning: '#ff8906',
      colorError: '#d60000',
      colorPrimaryBg: '#48484843',
      colorWarningBg: '#ffecc3',
      colorSuccessBg: '#e4ffef',
      borderRadius: 6,
      fontSize: 13,
      wireframe: true,
      colorSuccessBorder: '#c5ffdd',
      colorWarningBorder: '#ffecc3',
      colorErrorBorder: '#ffdfd9',
      colorPrimaryActive: '#8e8e8e',
      colorLink: '#3656d6',
    },
    components: {
      Layout: {
        headerColor: colorBgContainer,
        headerBg: '#000',
        // 顶部高度
        headerHeight: 56,
        // 侧边栏开关背景色
        triggerBg: isDark ? '#141414' : colorBgContainer,
        // 侧边栏开关颜色
        triggerColor: isDark ? '#fff' : colorText,
        // 侧边栏开关高度
        triggerHeight: 36,
      },
      Menu: {},
    },
  }

  return { themeConfig }
}

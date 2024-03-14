import { ItemType } from 'antd/es/menu/hooks/useItems'

export type PageVariant = 'fullwidth' | 'center'

export type ActionProps = {
  icon?: React.ReactNode
  danger?: boolean
  content?: React.ReactNode
  onAction?: () => void
}

export type PageProps = {
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

/** 自定义筛选组件 */
export type FilterProps = {
  /** 筛选搜索 */
  queryValue?: string
  /** 筛选搜索占位符 */
  queryPlaceholder?: string
  /** 筛选项数组 */
  filters: FilterItemProps[]
  /** 已应用的筛选项 */
  appliedFilters?: AppliedFilterItemProps[]
  /** 筛选搜索回调 */
  onQueryChange?: (queryValue: string) => void
  /** 清空筛选搜索 */
  onQueryClear: () => void
  /** 清空所有筛选 */
  onClearAll: () => void
}

/** 筛选项 */
export type FilterItemProps = {
  key: string
  label: string
  filter: React.ReactNode
  pinned?: boolean
}

/** 已应用的筛选项 */
export type AppliedFilterItemProps = {
  key: string
  label: string
  onRemove?: () => void
}

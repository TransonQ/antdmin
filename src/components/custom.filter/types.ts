export type FilterProps = {
  key: string
  label: string
  filter: React.ReactNode
  pinned?: boolean
}

export type FilterAppliedProps = {
  key: string
  label: string
  onRemove: () => void
}

export type FilterTagProps = {
  key: string
  label: string
  onRemove: () => void
}
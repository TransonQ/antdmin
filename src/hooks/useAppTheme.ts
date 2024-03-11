import { useAtom } from 'jotai/react'
import { atomWithStorage } from 'jotai/utils'

type Theme = 'light' | 'dark'

const ThemeAtom = atomWithStorage<Theme>('antdmin_theme', 'light')

export const useAppTheme = () => {
  return useAtom(ThemeAtom)
}

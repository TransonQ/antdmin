import { mutate } from 'swr'

/**
 * https://swr.vercel.app/zh-CN/docs/mutation.zh-CN#mutate-multiple-items
 */
export const clearSWRCache = () =>
  mutate(() => true, undefined, { revalidate: false })

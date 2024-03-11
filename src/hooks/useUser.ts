import useSWR from 'swr'
import { getUser } from '~/api'
import { clearSWRCache } from '~/utils'

export const useUser = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    'check-auth',
    () => getUser()
  )

  if (error) {
    clearSWRCache()
    window.location.replace('/login')
  }

  return {
    userData: data,
    userLoading: isLoading,
    userError: error,
    userIsValidating: isValidating,
    userMutate: mutate,
  }
}

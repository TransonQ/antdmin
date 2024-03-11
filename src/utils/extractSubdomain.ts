export const extractSubdomain = (hostname: string) => {
  if (hostname.indexOf('.') === hostname.lastIndexOf('.')) {
    return hostname
  } else {
    const lastDotIndex = hostname.lastIndexOf('.')
    const secondLastDotIndex = hostname.lastIndexOf('.', lastDotIndex - 1)
    const subdomain = hostname.substring(secondLastDotIndex)

    return subdomain
  }
}

import React from 'react'
import Balancer from 'react-wrap-balancer'

export const TextBalancer = ({ children }: { children: React.ReactNode }) => {
  return <Balancer>{children}</Balancer>
}

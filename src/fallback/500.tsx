import { Button, Result } from 'antd'

export const Fallback500 = () => {
  return (
    <Result
      status='500'
      title='500'
      subTitle='Sorry, something went wrong.'
      extra={<Button type='primary'>Back Home</Button>}
    />
  )
}

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Col, Flex, Form, Input, Row } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginData, postLogin } from '~/api'
import { CenterCardBreakPoint } from '~/config'
import { cookieScope, toaster } from '~/utils'

// https://ant-design.antgroup.com/components/form-cn#rule

export const Login = () => {
  const nav = useNavigate()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: LoginData) => {
    try {
      setLoading(true)
      const { token } = await postLogin(values)
      console.log('login success: ', token)

      cookieScope.setToken(token)
      nav('/app/home')
    } catch (err) {
      toaster.error('登录失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex
      vertical
      justify={'center'}
      style={{ height: '100%', backgroundColor: '#f5f5f5' }}
    >
      <Row justify={'center'}>
        <Col
          span={8}
          {...CenterCardBreakPoint}
        >
          <Card
            title='登录'
            style={{ paddingBottom: 0 }}
          >
            <Form
              onFinish={onFinish}
              initialValues={{ username: 'antdmin' }}
            >
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: '用户名不能为空' },
                  { min: 4, message: '用户名不能少于4位' },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder='用户名'
                  size='large'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: '密码不能为空' },
                  {
                    min: 4,
                    message: '密码不能少于4位',
                  },
                ]}
                validateTrigger={['onBlur']}
              >
                <Input
                  prefix={<LockOutlined />}
                  type='password'
                  placeholder='密码'
                  size='large'
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: 0 }}>
                <Flex
                  vertical
                  gap={'middle'}
                >
                  <Button
                    type='primary'
                    htmlType='submit'
                    loading={loading}
                  >
                    登录
                  </Button>
                  <Button>注册</Button>
                </Flex>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Flex>
  )
}

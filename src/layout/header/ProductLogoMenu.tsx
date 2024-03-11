import { AppstoreOutlined } from '@ant-design/icons'
import { Flex, Popover } from 'antd'
import { useToggle } from 'react-use'
import styled from 'styled-components'
import { StyledPress } from '~/components'

export const ProductLogoMenu = () => {
  const [isActive, toggleIsActive] = useToggle(false)
  const products = Array.from({ length: 13 })
    .fill(1)
    .map((_, i) => {
      return {
        name: `产品${i + 1}`,
        key: `product${i + 1}`,
      }
    })

  return (
    <StyledPress className={isActive ? 'active' : ''}>
      <Popover
        content={
          <div style={{ maxWidth: '354px' }}>
            <Flex
              gap={'small'}
              wrap='wrap'
              justify='space-between'
            >
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.key}
                  >
                    {product.name}
                  </ProductCard>
                )
              })}
            </Flex>
          </div>
        }
        // title='产品列表'
        trigger='click'
        open={isActive}
        onOpenChange={toggleIsActive}
      >
        <Flex
          gap={'small'}
          align='center'
          wrap='nowrap'
        >
          <div style={{ padding: '0 0.5rem' }}>
            <AppstoreOutlined />
          </div>
        </Flex>
      </Popover>
    </StyledPress>
  )
}

const ProductCard = styled.div`
  width: 120px;
  padding: 1rem 1.5rem;
  border-radius: 0.4rem;
  border: 1px solid gray;
  transition: all 0.3s ease;

  &:hover {
    /* background-color: rgba(255, 255, 255, 0.25); */
    color: red;
    cursor: pointer;
    background-color: gray;
  }
`

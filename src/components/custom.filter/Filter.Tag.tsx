import { CloseOutlined, DownOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { AppliedFilterItemProps } from './types'

export const FilterTag = ({ label, onRemove }: AppliedFilterItemProps) => {
  return (
    <CustomTag>
      <Label>{label}</Label>
      {onRemove ? (
        <ActionIcon onClick={onRemove}>
          <CloseOutlined />
        </ActionIcon>
      ) : (
        <ActionIcon>
          <DownOutlined />
        </ActionIcon>
      )}
    </CustomTag>
  )
}

const CustomTag = styled.span`
  display: inline-flex;
  border-radius: 6px;
  padding: 0 0.5rem;
  border: 1px dashed gray;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    border: 1px solid gray;
  }
`

const Label = styled.span``

const ActionIcon = styled.span`
  margin-left: 0.25rem;
`

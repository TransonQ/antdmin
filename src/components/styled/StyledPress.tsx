import styled from 'styled-components'

export const StyledPress = styled.div`
  display: flex;
  height: 40px;
  border-radius: 0.4rem;
  padding: 0.25rem 0.4rem;
  transition: all 0.3s ease;
  &:hover,
  &.active {
    background-color: rgba(255, 255, 255, 0.23);
    cursor: pointer;
  }
`

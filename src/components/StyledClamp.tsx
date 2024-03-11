import styled from 'styled-components'

export const StyledClamp = styled.div<{ $clamp?: number }>`
  display: '-webkit-box';
  /* -webkit-line-clamp: ${({ $clamp }) => ($clamp ? $clamp : 2)}; */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  /* white-space: nowrap; */
  max-width: 100px;
`

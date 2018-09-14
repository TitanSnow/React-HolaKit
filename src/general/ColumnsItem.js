import styled, { css } from 'react-emotion'

export const style = ({ margined }) => css`
  display: inline-block;
  width: 100%;
  break-inside: avoid-column;

  ${margined &&
    css`
      margin: 1rem 0;
    `};
`

export default styled.div(style)

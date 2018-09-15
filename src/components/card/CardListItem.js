import styled, { css } from 'react-emotion'

export const style = ({ theme: { cardPadding } }) => css`
  display: block;
  padding: calc(${cardPadding} / 2) ${cardPadding};
  margin-bottom: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.09), 0 -1px 3px rgba(0, 0, 0, 0.07);
  &:last-child {
    margin-bottom: 0;
  }
`

export default styled.div(style)

import { css } from 'react-emotion'

export default ({ theme: { cardGap } }) => css`
  padding: calc(${cardGap} / 2) 0;

  &::after {
    content: '';
    clear: both;
    display: table;
  }

  > * {
    box-sizing: border-box;
    display: inline-block;
  }

  @media (max-width: 700px) {
    > * {
      display: block;
    }
  }
`

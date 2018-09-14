import styled, { css } from 'react-emotion'

export const style = ({
  theme: { elementGap, cardPadding },
  round,
  radii,
  cardImageHead,
  cardImageFull,
}) => css`
  display: block;
  width: 100%;
  margin: ${elementGap} 0;
  border-radius: ${round ? '50%' : radii ? '5px' : false};

  ${cardImageHead &&
    css`
      margin: calc(0rem - ${cardPadding}) calc(0rem - ${cardPadding}) 2rem
        calc(0rem - ${cardPadding});
      width: calc(100% + 2 * ${cardPadding});
    `} ${cardImageFull &&
    css`
      margin: calc(0rem - ${cardPadding});
      width: calc(100% + 2 * ${cardPadding});
    `};
`

export default styled.img(style)

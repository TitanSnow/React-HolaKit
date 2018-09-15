import React from 'react'
import styled, { css } from 'react-emotion'

export const style = ({ theme: { elementGap }, round, radii }) => css`
  display: block;
  width: 100%;
  margin: ${elementGap} 0;
  border-radius: ${round ? '50%' : radii ? '5px' : false};
`

export const ImageStyled = styled.img(style)

export default function Image(props) {
  let { children, src, ...extraProps } = props
  const childrenArray = React.Children.toArray(children)
  if (
    src === void 0 &&
    childrenArray.length === 1 &&
    typeof childrenArray[0] === 'string'
  )
    src = childrenArray[0]
  return <ImageStyled {...extraProps} src={src} />
}

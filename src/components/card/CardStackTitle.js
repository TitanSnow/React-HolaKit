import React from 'react'
import styled, { css } from 'react-emotion'

export const style = ({ light, theme: { textLightColor } }) => css`
  line-height: 2em;
  a {
    color: inherit;
    text-decoration: none;
  }
  color: ${light && textLightColor};
`

export default function CardStackTitle(props) {
  const { tag = 'h3', ...extraProps } = props
  const Styled = styled(tag)(style)
  return <Styled {...extraProps} />
}

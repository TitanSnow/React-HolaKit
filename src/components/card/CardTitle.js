import React from 'react'
import styled, { css } from 'react-emotion'

export const style = ({ theme: { elementGap } }) => css`
  margin-bottom: ${elementGap};
`

export default function CardTitle(props) {
  const { tag = 'h2', ...extraProps } = props
  const Styled = styled(tag)(style)
  return <Styled {...extraProps} />
}

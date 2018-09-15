import React from 'react'
import styled, { css } from 'react-emotion'
import { CardTinyStyled } from './Card'

export const style = ({ theme: { elementGap } }) => css`
  margin-bottom: ${elementGap};
  ${CardTinyStyled} > & {
    margin-bottom: 0.5rem;
    white-space: normal;
  }
`

export default function CardTitle(props) {
  const { tag = 'h2', ...extraProps } = props
  const Styled = styled(tag)(style)
  return <Styled {...extraProps} />
}

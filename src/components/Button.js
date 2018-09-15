import React from 'react'
import styled, { css } from 'react-emotion'

export const style = ({ primary, ghost, theme }) => css`
  display: inline-block;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 0.15em 0;
  font-size: 1em;
  line-height: 1.5;
  border: none;
  outline: none;
  -webkit-appearance: none;
  box-shadow: ${ghost
    ? `0 0 0 .2em ${theme.primaryColor} inset !important`
    : '0 0 0 0 #fff inset'};
  cursor: pointer;
  transition: 0.3s box-shadow ease;
  border-radius: 0;
  font-weight: ${ghost ? 'bold' : 'inherit'};
  font-family: inherit;

  &:hover,
  &:active {
    box-shadow: 0 0 0 1.5em rgba(255, 255, 255, 0.5) inset;
  }

  background: ${primary ? theme.primaryColor : ghost ? 'transparent' : '#eee'};
  color: ${primary
    ? theme.textLightColor
    : ghost
      ? theme.primaryColor
      : theme.textDarkColor} !important;
`

export default styled.button(style)
const SubmitButtonStyled = styled.input(style)
export function SubmitButton(props) {
  const { children, ...extraProps } = props
  if (typeof children === 'string')
    Object.assign(extraProps, { value: children })
  return <SubmitButtonStyled {...extraProps} type="submit" />
}
export const LinkButton = styled.a(style)

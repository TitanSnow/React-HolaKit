import React from 'react'
import styled from 'react-emotion'

const Button = styled.button(
  {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0.5em 1em',
    margin: '0.15em 0',
    fontSize: '1em',
    lineHeight: '1.5',
    border: 'none',
    outline: 'none',
    '-webkit-appearance': 'none',
    boxShadow: '0 0 0 0 #fff inset',
    cursor: 'pointer',
    transition: '0.3s box-shadow ease',
    borderRadius: '0',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    '&:hover, &:active': {
      boxShadow: '0 0 0 1.5em rgba(255, 255, 255, 0.5) inset',
    },
    '&::-moz-focus-inner': {
      border: 'none',
    },
  },
  ({
    primary,
    ghost,
    normal,
    theme: { textDarkColor, primaryColor, textLightColor },
  }) => {
    if (!!primary + !!ghost + !!normal > 1)
      throw new Error(
        "Button can only be one kind: 'primary', 'ghost' or 'normal'"
      )
    if (!primary && !ghost && normal === void 0) normal = true
    if (normal)
      return {
        background: '#eee',
        color: `${textDarkColor} !important`,
      }
    else if (primary)
      return {
        background: primaryColor,
        color: `${textLightColor} !important`,
      }
    else if (ghost)
      return {
        background: 'transparent',
        boxShadow: `0 0 0 .2em ${primaryColor} inset !important`,
        fontWeight: 'bold',
        color: `${primaryColor} !important`,
      }
  }
)

export default Button
const SubmitButtonInner = Button.withComponent('input')
export const SubmitButton = styled(props => {
  const { children, ...extraProps } = props
  if (typeof children === 'string')
    Object.assign(extraProps, { value: children })
  return <SubmitButtonInner type="submit" {...extraProps} />
})()
export const LinkButton = Button.withComponent('a')

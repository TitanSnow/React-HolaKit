import React from 'react'
import styled from 'react-emotion'
import Container from '../layouts/Container'
import Headline from './Headline'

const Outer = styled.div(
  ({ theme: { layoutDivide } }) => ({
    minHeight: '45vh',
    [`@media (max-width: ${layoutDivide})`]: {
      minHeight: '25vh',
    },
  }),
  ({ heightExtended = false, theme: { layoutDivide } }) =>
    heightExtended && {
      paddingBottom: '10rem',
      marginBottom: '-10rem',
      [`@media (max-width: ${layoutDivide})`]: {
        paddingBottom: '4rem',
        marginBottom: '-4rem',
      },
    },
  ({ withTransparentNavbar = false }) =>
    withTransparentNavbar && {
      paddingTop: '5rem',
    },
  ({ colored = false, theme: { primaryColor } }) =>
    colored && {
      backgroundColor: primaryColor,
    },
  props => {
    let lightBg, darkBg
    const {
      colored = false,
      theme: { textDarkColor, textLightColor },
    } = props
    if (colored) {
      const { l = false, d = true } = props
      lightBg = l
      darkBg = d
    } else {
      const { l = true, d = false } = props
      lightBg = l
      darkBg = d
    }
    if (lightBg && darkBg)
      throw new Error("Hero cannot has 'lightBg' and 'darkBg' at the same time")
    return (
      (lightBg && {
        color: textDarkColor,
      }) ||
      (darkBg && {
        color: textLightColor,
      })
    )
  }
)

const Inner = styled(Container)(({ theme: { layoutDivide } }) => ({
  fontSize: '1.5em',
  padding: '15vh 0',
  [`@media (max-width: ${layoutDivide})`]: {
    fontSize: '1.3em',
    padding: '3vh 0',
  },
}))

export default styled(({ children, ...extraProps }) => {
  const newChildren = React.Children.map(
    children,
    child =>
      child.type === Headline && !child.props.level
        ? React.cloneElement(child, { level: 1 })
        : child
  )
  return (
    <Outer {...extraProps}>
      <Inner>{newChildren}</Inner>
    </Outer>
  )
})()

import React from 'react'
import styled from 'react-emotion'
import Container from '../layouts/Container'

const Outer = styled.footer(({ theme: { textLightColor, layoutDivide } }) => ({
  marginTop: '3rem',
  padding: '5rem 0',
  background: '#444',
  color: textLightColor,
  '> *': {
    opacity: 0.64,
  },
  a: {
    color: 'inherit',
  },
  [`@media (max-width: ${layoutDivide})`]: {
    marginTop: '1.8rem',
    padding: '3rem 0',
  },
}))

export default styled(({ children, ...extraProps }) => (
  <Outer {...extraProps}>
    <Container>{children}</Container>
  </Outer>
))()

import React from 'react'
import styled from 'react-emotion'

const Nou = styled.a`
  text-decoration: none;
`

const Link = ({ noUnderline = false, ...extraProps }) =>
  noUnderline ? <Nou {...extraProps} /> : <a {...extraProps} />

export default styled(Link)()

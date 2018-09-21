import React from 'react'
import styled from 'react-emotion'

const Nou = styled.a`
  text-decoration: none;
`

export default styled(
  ({ noUnderline = false, ...extraProps }) =>
    noUnderline ? <Nou {...extraProps} /> : <a {...extraProps} />
)()

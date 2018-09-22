import React from 'react'
import styled from 'react-emotion'
import Container from '../layouts/Container'
import Link from '../general/Link'

const Inner = styled.div(
  {
    height: '5rem',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    '> nav': {
      lineHeight: '5rem',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      '> a': {
        display: 'inline-block',
        fontSize: '1.2rem',
        textDecoration: 'none',
        transition: '0.3s color ease',
      },
      '&:first-child > a': {
        paddingRight: '1em',
      },
      '&:last-child > a': {
        paddingLeft: '1em',
      },
    },
  },

  ({ lightBg = true, darkBg = false }) => {
    if (lightBg && darkBg)
      throw new Error(
        "Navbar cannot has 'lightBg' and 'darkBg' at the same time"
      )
    return (
      (lightBg && {
        '> nav > a': {
          color: 'rgba(0, 0, 0, 0.6)',
        },
      }) ||
      (darkBg && {
        '> nav > a': {
          color: 'rgba(255, 255, 255, 0.9)',
        },
      })
    )
  }
)

const Outer = styled.header(
  ({ white = true }) =>
    white && {
      background: '#fff',
      marginBottom: '2rem',
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
    },
  ({ transparent = false }) =>
    transparent && {
      marginBottom: '-5rem',
    }
)

const Medium = styled.div(({ theme: { layoutDivide } }) => ({
  padding: '0 1.2rem',
  [`@media (max-width: ${layoutDivide})`]: {
    padding: '0 .5rem',
  },
}))

export default styled(
  ({
    wide = false,
    white = true,
    transparent = false,
    lightBg = true,
    darkBg = false,
    children,
    ...extraProps
  }) => {
    const Med = wide ? Medium : Container
    return (
      <Outer {...extraProps} white={white} transparent={transparent}>
        <Med>
          <Inner lightBg={lightBg} darkBg={darkBg}>
            {children}
          </Inner>
        </Med>
      </Outer>
    )
  }
)()

export const Brand = styled(Link)({
  fontWeight: 'bold',
})

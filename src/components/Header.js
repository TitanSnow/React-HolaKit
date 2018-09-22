import React from 'react'
import styled from 'react-emotion'
import Navbar from './Navbar'
import Hero from './Hero'

export default styled(({ children }) => {
  return React.Children.map(
    children,
    child =>
      child.type === Navbar
        ? React.cloneElement(child, {
            transparent: true,
            darkBg: true,
            lightBg: false,
            white: false,
          })
        : child.type === Hero
          ? React.cloneElement(child, {
              heightExtended: true,
              withTransparentNavbar: true,
              colored: true,
            })
          : child
  )
})()

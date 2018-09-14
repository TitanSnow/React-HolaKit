import React, { Component } from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import defaultThemeFactory from './var'
import reset from './reset'
import typography from './typography'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 9999,
    }
    this.observerWidth = elem => {
      if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(entries => {
          const width = entries[0].contentRect.width
          this.setState({ width })
        })
        resizeObserver.observe(elem)
      }
    }
    this.Styled = styled.div`
      ${reset};
      ${typography};
    `
  }
  render() {
    const theme = defaultThemeFactory(this.state.width)
    const { Styled } = this
    return (
      <ThemeProvider theme={theme}>
        <Styled innerRef={this.observerWidth}>{this.props.children}</Styled>
      </ThemeProvider>
    )
  }
}

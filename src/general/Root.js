import React, { Component } from 'react'
import { cx } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import defaultThemeFactory from './var'
import reset from './reset'

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
  }
  render() {
    const theme = defaultThemeFactory(this.state.width)
    return (
      <ThemeProvider theme={theme}>
        <div className={cx(reset)} ref={this.observerWidth}>
          {this.props.children}
        </div>
      </ThemeProvider>
    )
  }
}

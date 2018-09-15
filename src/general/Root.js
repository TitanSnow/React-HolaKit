import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import defaultThemeFactory from './var'
import reset from './reset'
import typography from './typography'
import greyBg from '../layouts/greyBg'

export default class Root extends PureComponent {
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
    const optional = (name, func) => props => props[name] && func(props)
    this.Styled = styled.div`
      ${optional('reset', reset)};
      ${optional('typography', typography)};
      ${optional('greyBg', greyBg)};
      ${({ fillBody }) => fillBody && 'min-height: 100vh'};
    `
  }
  render() {
    const theme = defaultThemeFactory(this.state.width)
    const { Styled } = this
    return (
      <ThemeProvider theme={theme}>
        <Styled {...this.props} innerRef={this.observerWidth} />
      </ThemeProvider>
    )
  }
}

Root.defaultProps = {
  reset: true,
  typography: true,
  greyBg: true,
  fillBody: true,
}

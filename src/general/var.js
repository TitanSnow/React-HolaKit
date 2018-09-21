import React, { PureComponent } from 'react'
import { ThemeProvider } from 'emotion-theming'

export default class DefaultVars extends PureComponent {
  constructor(props) {
    super(props)

    this.syncVars = this.syncVars.bind(this)

    this.layoutDivide = 700

    this.defaultVars = {
      primaryColor: '#3498db',
      textLightColor: 'rgba(255, 255, 255, 0.97)',
      textDarkColor: 'rgba(0, 0, 0, 0.8)',
      bgOnDark: 'rgba(255, 255, 255, 0.4)',
      backdropColor: 'rgba(0, 0, 0, 0.8)',
      focusColor: 'rgba(52, 152, 219, 0.5)',
      avatarBg: 'rgba(255, 255, 255, 0.4)',
      cardPadding: '2.5rem',
      cardGap: '2rem',
      elementGap: '2rem',
      layoutDivide: this.layoutDivide + 'px',
    }

    this.smallVars = {
      ...this.defaultVars,
      cardPadding: '1.6rem',
      cardGap: '2.5vw',
      elementGap: '1rem',
    }

    this.state = {
      vars: this.defaultVars,
    }
  }

  syncVars() {
    const width = window.innerWidth
    if (width <= this.layoutDivide)
      this.setState({
        vars: this.smallVars,
      })
    else
      this.setState({
        vars: this.defaultVars,
      })
  }

  render() {
    return <ThemeProvider {...this.props} theme={this.state.vars} />
  }

  componentDidMount() {
    window.addEventListener('resize', this.syncVars)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.syncVars)
  }
}

import React, { PureComponent } from 'react'
import styled, { css } from 'react-emotion'
import DefaultVars from './var'
import Reset from './reset'
import Typography from './typography'

const Inner = styled.div(
  ({ background = '#eee' }) => ({ background }),
  ({ fillBody = true }) => fillBody && { minHeight: '100vh' },
  ({ reset = true, ...extraProps }) => reset && Reset(extraProps),
  ({ typography = true, ...extraProps }) => typography && Typography(extraProps)
)

const FillBody = css({
  margin: 0,
  padding: 0,
})

class Root extends PureComponent {
  render() {
    const { vars: Vars = DefaultVars, ...extraProps } = this.props
    return (
      <Vars>
        <Inner {...extraProps} />
      </Vars>
    )
  }

  componentDidMount() {
    const { fillBody = true } = this.props
    if (fillBody) document.body.classList.add(FillBody)
  }
  componentWillUnmount() {
    const { fillBody = true } = this.props
    if (fillBody) document.body.classList.remove(FillBody)
  }
}

export default styled(Root)()

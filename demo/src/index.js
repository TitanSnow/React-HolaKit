import React, { Component } from 'react'
import { render } from 'react-dom'

import * as Hola from '../../src'

class Demo extends Component {
  render() {
    return (
      <Hola.Root>
        <Hola.Container>
          <p>Hello World</p>
        </Hola.Container>
      </Hola.Root>
    )
  }
}

render(<Demo />, document.getElementById('demo'))
document.body.style.margin = '0px'
document.body.style.padding = '0px'

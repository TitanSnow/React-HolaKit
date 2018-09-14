import React, { Component } from 'react'
import { render } from 'react-dom'

import * as Hola from '../../src'

class Demo extends Component {
  render() {
    return (
      <Hola.Root>
        <p>Hello World</p>
      </Hola.Root>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))

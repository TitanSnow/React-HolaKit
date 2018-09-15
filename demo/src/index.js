import React, { Component } from 'react'
import { render } from 'react-dom'

import * as Hola from '../../src'

class Demo extends Component {
  render() {
    return (
      <Hola.Root>
        <Hola.Container>
          <Hola.CardStack container={Hola.Columns}>
            <Hola.CardStackTitle>UI Components</Hola.CardStackTitle>
            <Hola.Card>
              <Hola.CardTitle>Buttons</Hola.CardTitle>
              <p>
                <Hola.SubmitButton>Submit</Hola.SubmitButton>{' '}
                <Hola.Button>Normal</Hola.Button>{' '}
                <Hola.LinkButton>Link</Hola.LinkButton>
              </p>
              <p>
                <Hola.Button primary>Primary</Hola.Button>{' '}
                <Hola.Button ghost>Ghost</Hola.Button>
              </p>
            </Hola.Card>
          </Hola.CardStack>
        </Hola.Container>
      </Hola.Root>
    )
  }
}

render(<Demo />, document.getElementById('demo'))
document.body.style.margin = '0px'
document.body.style.padding = '0px'

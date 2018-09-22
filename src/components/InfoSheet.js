import React from 'react'
import styled from 'react-emotion'

const Row = styled.div`
  display: block;
  line-height: 1.5;
  > * {
    box-sizing: border-box;
  }
  > :first-child {
    display: inline-block;
    width: 30%;
    padding-right: 0.5em;
    font-weight: bold;
    text-align: right;
  }
  > :last-child {
    width: 70%;
    padding-left: 0.5em;
    float: right;
  }
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`

const cloneNewType = (old, type) =>
  React.createElement(type, {
    ...old.props,
    ...(old.ref !== void 0 && { ref: old.ref }),
  })

export default styled(props => {
  const { children, ...extraProps } = props
  let idx = 0
  let valid = true
  React.Children.forEach(children, child => {
    const iskey = idx++ % 2 === 0
    if (iskey && child.type !== 'dt') valid = false
    if (!iskey && child.type !== 'dd') valid = false
  })
  if (idx % 2 !== 0) valid = false
  if (!valid) throw new Error('Invalid InfoSheet: dt-dd pairs must be matched')
  idx = 0
  let lastKey
  const newChildren = React.Children.map(children, child => {
    const iskey = idx++ % 2 === 0
    if (iskey) lastKey = child
    else {
      const key = cloneNewType(lastKey, 'span')
      const value = cloneNewType(child, 'p')
      return (
        <Row>
          {key}
          {value}
        </Row>
      )
    }
  })
  return <div {...extraProps}>{newChildren}</div>
})()

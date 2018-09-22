import React from 'react'
import styled, { css } from 'react-emotion'

const Inner = styled.table(
  ({ fullwidth = false }) =>
    fullwidth &&
    css`
      width: 100%;
    `,
  css`
    thead {
      box-shadow: 0 -2px 0 #ccc inset;
      color: rgba(0, 0, 0, 0.6);
    }

    tbody tr {
      box-shadow: 0 -1px 0 #ccc inset;
    }

    th,
    td {
      line-height: 1.5;
    }

    th {
      padding: 0.6em;
    }

    td {
      padding: 0.4em 0.5em;
    }
  `
)

const Outer = styled.div`
  overflow-x: auto;
`

export default styled(props => {
  return (
    <Outer>
      <Inner {...props} />
    </Outer>
  )
})()

import styled from 'react-emotion'

export default styled.div(
  ({ columns = '100%', rows = false, theme: { cardGap } }) => ({
    display: 'grid',
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gridGap: cardGap,
  })
)

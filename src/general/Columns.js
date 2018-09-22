import styled from 'react-emotion'

export const Columns = styled.div(
  ({ ruled = false, count = 3, theme: { cardGap } }) => ({
    columns: `${count} 15rem`,
    columnGap: cardGap,
    columnRule: ruled && '1px solid #eee',
  })
)

export const ColumnsItem = styled.div(({ margined = false }) => ({
  display: 'inline-block',
  width: '100%',
  breakInside: 'avoid-column',
  margin: margined && '1rem 0',
}))

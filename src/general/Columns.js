import styled, { css } from 'react-emotion'

export const style = ({ ruled }) => css`
  columns: 3 15rem;
  column-gap: 2rem;

  ${ruled &&
    css`
      column-rule: 1px solid #eee;
    `};
`

export default styled.div`
  ${style};
`

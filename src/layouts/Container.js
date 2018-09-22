import styled, { css } from 'react-emotion'

export default styled.div(
  ({ theme: { layoutDivide } }) => css`
    position: relative;
    width: 90%;
    max-width: 1220px;
    margin: 0 auto;
    box-sizing: border-box;
    @media (max-width: ${layoutDivide}) {
      width: 95%;
    }
  `
)

import styled, { css } from 'react-emotion'

export const style = css`
  position: relative;
  width: 90%;
  max-width: 1220px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 700px) {
    width: 95%;
  }
`

export default styled.div`
  ${style};
`

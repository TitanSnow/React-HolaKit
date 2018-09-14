import styled, { css } from 'react-emotion'
import layoutContainer from './layoutContainer'

export const style = () => css`
  ${layoutContainer};
  display: flex;
  box-sizing: content-box;
  overflow-x: auto;
  overflow-y: visible;
  white-space: nowrap;
  > .hola-container > * {
    vertical-align: top;
    margin-right: 0.7rem;
  }
  > .hola-container > .hola-card:last-child {
    margin-right: 5vw;
    /* Usually this works, but might broken on wider screen. We will still need to
    * improve this handling.
    */
  }
`

export default styled.div(style)

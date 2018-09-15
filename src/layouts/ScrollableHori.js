import styled from 'react-emotion'
import layoutContainer from './layoutContainer'

export default styled.div`
  ${layoutContainer};
  display: flex;
  box-sizing: content-box;
  overflow-x: auto;
  overflow-y: visible;
  white-space: nowrap;
  > div > * {
    vertical-align: top;
    margin-right: 0.7rem;
  }
  > div > :last-child {
    margin-right: 5vw;
    /* I don't know laosb's meaning */
  }
`

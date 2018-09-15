import styled, { css } from 'react-emotion'
import Image from './Image'

export const style = ({
  highlighted,
  medium = true,
  theme: { avatarBg, focusColor },
}) => css`
  display: inline-block;
  background: ${avatarBg};
  margin: 0;
  ${highlighted &&
    css`
      box-shadow: 0 0 0 3px ${focusColor};
    `};
  ${medium &&
    css`
      height: 4.5rem;
      width: 4.5rem;
    `};
`

export default styled(Image)(style)

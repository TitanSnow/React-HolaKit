import styled from 'react-emotion'
import Image from './Image'

export default styled(Image)(
  ({ theme: { avatarBg } }) => ({
    display: 'inline-block',
    background: avatarBg,
    margin: 0,
  }),
  ({ highlighted = false, theme: { focusColor } }) =>
    highlighted && {
      boxShadow: `0 0 0 3px ${focusColor}`,
    },
  ({ medium = true }) =>
    medium && {
      height: '4.5rem',
      width: '4.5rem',
    }
)

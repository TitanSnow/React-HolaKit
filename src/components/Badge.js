import styled from 'react-emotion'
import { ActiveLi } from './VMenu'

export default styled.span(
  ({ theme: { primaryColor, textLightColor } }) => ({
    display: 'inline-block',
    margin: '0 5px',
    fontWeight: 'bold',
    lineHeight: '1',
    fontSize: '1rem',
    padding: '6px',
    background: primaryColor,
    color: `${textLightColor} !important`,
  }),
  ({ radii = false }) =>
    radii && {
      padding: '6px 12px',
      borderRadius: '999em',
    },
  ({ light = false, theme: { bgOnDark } }) => {
    const lt = {
      background: bgOnDark,
      fontWeight: 'normal',
    }
    return {
      [`${ActiveLi} &`]: lt,
      ...(light && lt),
    }
  },
  ({ theme: { layoutDivide } }) => ({
    [`@media (max-width: ${layoutDivide})`]: {
      fontSize: '0.9rem',
    },
  })
)

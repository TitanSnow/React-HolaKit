import styled from 'react-emotion'

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
  ({ light = false, theme: { bgOnDark } }) =>
    light && {
      background: bgOnDark,
      fontWeight: 'normal',
    },
  ({ theme: { layoutDivide } }) => ({
    [`@media (max-width: ${layoutDivide})`]: {
      fontSize: '0.9rem',
    },
  })
)

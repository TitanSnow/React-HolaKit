const layoutDivide = 700
const defaultTheme = {
  primaryColor: '#3498db',
  textLightColor: 'rgba(255, 255, 255, 0.97)',
  textDarkColor: 'rgba(0, 0, 0, 0.8)',
  bgOnDark: 'rgba(255, 255, 255, 0.4)',
  backdropColor: 'rgba(0, 0, 0, 0.8)',

  focusColor: 'rgba(52, 152, 219, 0.5)',

  avatarBg: 'rgba(255, 255, 255, 0.4)',

  cardPadding: '2.5rem',
  cardGap: '2rem',

  elementGap: '2rem',
}
const smallTheme = {
  ...defaultTheme,
  cardPadding: '1.6rem',
  cardGap: '2.5vw',
  elementGap: '1rem',
}

export default width => (width <= layoutDivide ? smallTheme : defaultTheme)

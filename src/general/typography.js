import './font.css'
import { css } from 'react-emotion'

export default ({
  theme: { textDarkColor, primaryColor, layoutDivide },
}) => css`
  color: ${textDarkColor};
  font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, 'Lantinghei SC',
    sans-serif;
  font-size: 1rem;

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  *:matches(h4, h5, h6) {
    font-size: 1em;
  }

  *:matches(h1, h2, h3, h4, h5, h6) a {
    color: inherit;
    text-decoration: inherit;
  }

  a {
    color: ${primaryColor};
  }

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${layoutDivide}) {
    font-size: 0.9rem;
  }
`

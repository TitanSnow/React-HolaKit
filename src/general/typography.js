import './font.css'
import { css } from 'react-emotion'

export default ({ theme }) => css`
  color: ${theme.textDarkColor};
  font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, 'Lantinghei SC',
    sans-serif;

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
    color: ${theme.primaryColor};
  }

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`

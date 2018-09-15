import styled, { css } from 'react-emotion'

export const style = ({ radii, light, theme }) => css`
  display: inline-block;
  margin: 0 5px;
  font-weight: bold;
  line-height: 1;
  font-size: 1rem;
  padding: 6px;
  background: ${theme.primaryColor};
  color: ${theme.textLightColor} !important;
  ${radii &&
    css`
      padding: 6px 12px;
      border-radius: 999em;
    `};
  ${light &&
    css`
      background: ${theme.bgOnDark};
      font-weight: normal;
    `};
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`

export default styled.span(style)

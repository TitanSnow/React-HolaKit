import React from 'react'
import styled, { css } from 'react-emotion'
import Card from './Card'

export const ActiveLi = styled.li(({ theme: { primaryColor, textLightColor } }) => ({
  '> a': {
    background: primaryColor,
    color: textLightColor,
  },
}))

const Inner = styled.ul(
  ({ theme: { primaryColor } }) => ({
    listStyle: 'none',
    '> li': {
      borderBottom: '1px solid #ccc',
      '> a': {
        display: 'block',
        textDecoration: 'none',
        lineHeight: '3em',
        transition: '0.3s all ease',
        padding: '0 1em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '&:hover, &:active, &:focus': {
          boxShadow: `-5px 0 0 ${primaryColor} inset`,
        },
      },
      '&:last-child': {
        borderBottom: '0',
      },
    },
  }),
  ({ theme: { cardPadding } }) => css`
    ${Card} > & {
      margin: 0 calc(0rem - ${cardPadding});
      > li > a {
        padding: 0 ${cardPadding};
      }
    }
  `
)

export default styled(props => {
  const { children, ...extraProps } = props
  return (
    <Inner {...extraProps}>
      {React.Children.map(children, child => {
        const Li = child.props.active ? ActiveLi : 'li'
        return <Li>{child}</Li>
      })}
    </Inner>
  )
})()

import React from 'react'
import styled, { css } from 'react-emotion'
import Image from './Image'
import Headline from './Headline'
import CardItem from './CardItem'

const Inner = styled.div(
  ({ theme: { cardPadding, textDarkColor } }) => ({
    padding: cardPadding,
    background: '#fff',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
    color: textDarkColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    'a & *': {
      textDecoration: 'none',
      color: 'inherit',
    },
    p: {
      lineHeight: '22px',
    },
  }),
  ({ cardAlter, theme: { cardPadding } }) => css`
    > ${Image}:first-child {
      ${(cardAlter === 'head-image' &&
        css`
          margin: calc(0rem - ${cardPadding}) calc(0rem - ${cardPadding}) 2rem
            calc(0rem - ${cardPadding});
          width: calc(100% + 2 * ${cardPadding});
        `) ||
        (cardAlter === 'full-image' &&
          css`
            margin: calc(0rem - ${cardPadding});
            width: calc(100% + 2 * ${cardPadding});
          `)};
    }
  `,
  ({ theme: { elementGap } }) => css`
    > ${Headline} {
      margin-bottom: ${elementGap};
    }
  `,
  ({ tiny = false, theme: { layoutDivide } }) =>
    tiny &&
    css`
      display: inline-block;
      padding: 0.7rem;
      width: 13rem;
      > ${Headline} {
        margin-bottom: 0.5rem;
        white-space: normal;
      }
      > ${Image}:first-child {
        margin: -0.7rem -0.7rem 1.2rem -0.7rem;
        width: calc(100% + 1.4rem);
      }
      @media (max-width: ${layoutDivide}) {
        width: 8rem;
      }
    `,
  ({ cardAlter }) =>
    cardAlter === 'card-list' && {
      padding: 0,
      overflow: 'hidden',
    }
)

export default styled(props => {
  const { tiny = false } = props
  const { children, ...extraProps } = props
  const childrenArray = React.Children.toArray(children)
  let cardAlter
  if (childrenArray.length === 1 && childrenArray[0].type === Image)
    cardAlter = 'full-image'
  else if (
    childrenArray.length >= 2 &&
    childrenArray[0].type === Image &&
    childrenArray[1].type !== Image
  )
    cardAlter = 'head-image'
  else if (childrenArray.every(child => child.type === CardItem))
    cardAlter = 'card-list'
  const newChildren = React.Children.map(
    children,
    child =>
      child.type === Headline && !child.props.level
        ? React.cloneElement(child, { level: tiny ? 4 : 2 })
        : child
  )
  return (
    <Inner {...extraProps} cardAlter={cardAlter}>
      {newChildren}
    </Inner>
  )
})()

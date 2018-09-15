/*

Basic Card

Card components are blocks by default. We don't suggest using them as inlines or
inline-blocks. Normally you would just wrap cards in card stack or get them in
layouts so they won't get too wide. In some cases you want to wrap cards directly
in containers: Fine, but don't do it every where, since cards can be too wide for
desktop users. In the following example page, we explictly get a max width for
demostration purpose.

Cards can't be too narrow too; Because we have great padding around cards, if you
get 4 or more columns in a container, the whole page may looks too messy, and
lines in each column will be too short for a comfortable reading experience.

Of course titles are accepted in cards and you will use them frequently. We also
get head images for cards, and even pure image cards. Go ahead and make your app
vivid.

We have patched cards for being used in links; Feel free to use them as
clickable items, but don't use them as buttons. For example, you can use linked
cards as article items in a list page of blog, but don't use a card titled "Click
Here" as an action button. Card always contains some actual data, instead of pure
commands / verbs.

*/

import React from 'react'
import styled, { css } from 'react-emotion'
import Image, { ImageStyled } from '../Image'
import CardListItem from './CardListItem'

export const CardStyled = styled.div`
  padding: ${props => props.theme.cardPadding};
  background: #fff;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.textDarkColor};
  background-size: cover;
  background-position: center;

  a & * {
    text-decoration: none;
    color: inherit;
  }

  p {
    line-height: 22px;
  }

  > ${ImageStyled}:first-child {
    ${({ cardAlter, theme: { cardPadding } }) => {
      if (cardAlter === 'head-image')
        return css`
          margin: calc(0rem - ${cardPadding}) calc(0rem - ${cardPadding}) 2rem
            calc(0rem - ${cardPadding});
          width: calc(100% + 2 * ${cardPadding});
        `
      if (cardAlter === 'full-image')
        return css`
          margin: calc(0rem - ${cardPadding});
          width: calc(100% + 2 * ${cardPadding});
        `
    }};
  }
`

export const CardTinyStyled = styled(CardStyled)`
  display: inline-block;
  padding: 0.7rem;
  width: 13rem;
  > ${ImageStyled}:first-child {
    ${({ cardAlter }) =>
      cardAlter === 'head-image' &&
      css`
        margin: -0.7rem -0.7rem 1.2rem -0.7rem;
        width: calc(100% + 1.4rem);
      `};
  }
  @media (max-width: 700px) {
    width: 8rem;
  }
`

export const CardListStyled = styled.div`
  padding: 0;
  overflow: hidden;
`

export default function Card(props) {
  const { children } = props
  const { tiny, ...extraProps } = props
  const childrenArray = React.Children.toArray(children)
  let cardAlter
  let Styled = tiny ? CardTinyStyled : CardStyled
  if (childrenArray.length === 1 && childrenArray[0].type === Image)
    cardAlter = 'full-image'
  else if (
    childrenArray.length >= 2 &&
    childrenArray[0].type === Image &&
    childrenArray[1].type !== Image
  )
    cardAlter = 'head-image'
  else if (
    childrenArray.length &&
    childrenArray.every(child => child.type === CardListItem)
  )
    Styled = CardListStyled.withComponent(Styled)
  return <Styled {...extraProps} cardAlter={cardAlter} />
}

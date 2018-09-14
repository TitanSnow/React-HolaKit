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
import Image from '../Image'

export const style = ({ theme }) => css`
  padding: ${theme.cardPadding};
  background: #fff;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  color: ${theme.textDarkColor};
  background-size: cover;
  background-position: center;

  a & * {
    text-decoration: none;
    color: inherit;
  }

  p {
    line-height: 22px;
  }
`

const CardStyled = styled.div(style)

export default function Card(props) {
  const { children, ...extraProps } = props
  const childrenArray = React.Children.toArray(children)
  let newChildren
  if (childrenArray.length === 1 && childrenArray[0].type === Image) {
    // full image
    newChildren = [
      React.cloneElement(childrenArray[0], { cardImageFull: true }),
    ]
  } else if (
    childrenArray.length >= 2 &&
    childrenArray[0].type === Image &&
    childrenArray[1].type !== Image
  ) {
    // head image
    newChildren = [
      React.cloneElement(childrenArray[0], { cardImageHead: true }),
      ...childrenArray.slice(1),
    ]
  } else {
    newChildren = children
  }
  return <CardStyled {...extraProps}>{newChildren}</CardStyled>
}

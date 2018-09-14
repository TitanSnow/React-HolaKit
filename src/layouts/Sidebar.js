import React from 'react'
import styled, { css } from 'react-emotion'
import layoutContainer from './layoutContainer'

const left = Symbol('left')
const right = Symbol('right')

const SidebarLayoutStyled = styled.div`
  ${layoutContainer};
`

export function SidebarLayout(props) {
  const err = new Error(
    'SidebarLayout accepts exactly one SidebarMain and one SidebarAside as children'
  )
  const { children, ...extraProps } = props
  if (React.Children.count(children) !== 2) {
    throw err
  }
  let hasMain = false
  let hasAside = false
  let idx = 0
  const newChildren = React.Children.map(children, child => {
    hasMain = hasMain || child.type === SidebarMain
    hasAside = hasAside || child.type === SidebarAside
    return React.cloneElement(child, {
      sidebarLayoutInternal: idx++ == 0 ? left : right,
    })
  })
  if (!hasMain || !hasAside) {
    throw err
  }
  return (
    <SidebarLayoutStyled {...extraProps}>{newChildren}</SidebarLayoutStyled>
  )
}

export const styleSidebarMain = ({
  sidebarLayoutInternal: pos,
  theme: { cardGap },
}) => css`
  width: 70%;
  ${pos === left
    ? css`
        padding-right: calc(${cardGap} / 2);
      `
    : css`
        padding-left: calc(${cardGap} / 2);
      `};

  @media (max-width: 700px) {
    width: auto;
    padding-right: 0;
    padding-left: 0;
    ${pos === left
      ? css`
          padding-bottom: calc(${cardGap} / 2);
        `
      : css`
          padding-top: calc(${cardGap} / 2);
        `};
  }
`

const SidebarMainStyled = styled.div`
  ${styleSidebarMain};
`

export function SidebarMain(props) {
  if (!props.sidebarLayoutInternal) {
    throw new Error('SidebarMain must be an immediate child of SidebarLayout')
  }
  return <SidebarMainStyled {...props} />
}

export const styleSidebarAside = ({
  sidebarLayoutInternal: pos,
  theme: { cardGap },
}) => css`
  width: 30%;
  ${pos === right
    ? css`
        float: right;
        padding-left: calc(${cardGap} / 2);
      `
    : css`
        float: left;
        padding-right: calc(${cardGap} / 2);
      `};

  @media (max-width: 700px) {
    width: auto;
    float: none;
    padding-left: 0;
    padding-right: 0;
  }
`

const SidebarAsideStyled = styled.div`
  ${styleSidebarAside};
`

export function SidebarAside(props) {
  if (!props.sidebarLayoutInternal) {
    throw new Error('SidebarAside must be an immediate child of SidebarLayout')
  }
  return <SidebarAsideStyled {...props} />
}

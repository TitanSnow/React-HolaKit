import React from 'react'
import styled from 'react-emotion'
import layoutContainer from './layoutContainer'

export const Main = styled.div``
export const Aside = styled.div``

function reverse(pos) {
  return pos === 'left' ? 'right' : 'left'
}

const LayoutStyled = styled.div`
  ${layoutContainer};
  > ${Main} {
    width: 70%;
    padding-${props => props.sidebarPosition}: calc(${props =>
  props.theme.cardGap} / 2);
    @media (max-width: 700px) {
      width: auto;
      padding-${props => props.sidebarPosition}: 0;
      padding-${props =>
        props.sidebarPosition === 'right' ? 'bottom' : 'top'}: calc(${props =>
  props.theme.cardGap} / 2);
    }
  }
  > ${Aside} {
    width: 30%;
    float: ${props => props.sidebarPosition};
    padding-${props => reverse(props.sidebarPosition)}: calc(${props =>
  props.theme.cardGap} / 2);
    @media (max-width: 700px) {
      width: auto;
      float: none;
      padding-${props => reverse(props.sidebarPosition)}: 0;
    }
  }
`

export function Layout(props) {
  const err = new Error(
    'Sidebar.Layout accepts exactly one Sidebar.Main and Sidebar.Aside as children'
  )
  const { children } = props
  const childrenArray = React.Children.toArray(children)
  if (childrenArray.length !== 2) throw err
  let sidebarPosition
  if (childrenArray[0].type === Main && childrenArray[1].type === Aside)
    sidebarPosition = 'right'
  else if (childrenArray[0].type === Aside && childrenArray[1].type === Main)
    sidebarPosition = 'left'
  else throw err
  return <LayoutStyled {...props} sidebarPosition={sidebarPosition} />
}

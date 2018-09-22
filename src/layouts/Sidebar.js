import React from 'react'
import styled from 'react-emotion'

const Inner = styled.div(
  ({ theme: { cardGap, layoutDivide } }) => ({
    display: 'flex',
    [`@media (max-width: ${layoutDivide})`]: {
      display: 'block',
    },
    '> :first-child': {
      paddingRight: `calc(${cardGap} / 2)`,
      [`@media (max-width: ${layoutDivide})`]: {
        paddingRight: '0',
        paddingBottom: `calc(${cardGap} / 2)`,
      },
    },
    '> :last-child': {
      paddingLeft: `calc(${cardGap} / 2)`,
      [`@media (max-width: ${layoutDivide})`]: {
        paddingLeft: '0',
        paddingTop: `calc(${cardGap} / 2)`,
      },
    },
  }),
  ({ sidebarPosition }) =>
    (sidebarPosition === 'left' && {
      '> :first-child': {
        width: '30%',
      },
      '> :last-child': {
        width: '70%',
      },
    }) ||
    (sidebarPosition === 'right' && {
      '> :first-child': {
        width: '70%',
      },
      '> :last-child': {
        width: '30%',
      },
    }),
  ({ theme: { layoutDivide } }) => ({
    [`@media (max-width: ${layoutDivide})`]: {
      '> :first-child, > :last-child': {
        width: 'initial',
      },
    },
  })
)

export default styled(props => {
  const err = new Error(
    "Sidebar.Layout accepts exactly one 'main' and 'aside' as children"
  )
  const { children, ...extraProps } = props
  const childrenArray = React.Children.toArray(children)
  if (childrenArray.length !== 2) throw err
  let sidebarPosition
  if (childrenArray[0].type === 'main' && childrenArray[1].type === 'aside')
    sidebarPosition = 'right'
  else if (
    childrenArray[0].type === 'aside' &&
    childrenArray[1].type === 'main'
  )
    sidebarPosition = 'left'
  else throw err
  return (
    <Inner {...extraProps} sidebarPosition={sidebarPosition}>
      {React.Children.map(children, child => {
        const props = {
          ...child.props,
          ...(child.ref !== void 0 && { ref: child.ref }),
        }
        return <div {...props} />
      })}
    </Inner>
  )
})()

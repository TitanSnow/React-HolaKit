import React from 'react'
import styled from 'react-emotion'
import Grid from './Grid'

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
    <Grid
      {...extraProps}
      columns={
        (sidebarPosition === 'left' && '30% 70%') ||
        (sidebarPosition === 'right' && '70% 30%')
      }
    >
      {React.Children.map(children, child => {
        const props = {
          ...child.props,
          ...(child.ref !== void 0 && { ref: child.ref }),
        }
        return <div {...props} />
      })}
    </Grid>
  )
})()

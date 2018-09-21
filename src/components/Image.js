import React from 'react'
import styled from 'react-emotion'

const Inner = styled.img(
  ({ theme: { elementGap }, round = false, radii = false }) => ({
    display: 'block',
    width: '100%',
    margin: `${elementGap} 0`,
    borderRadius: (round && '50%') || (radii && '5px'),
  })
)

export default styled(props => {
  let { children, src, ...extraProps } = props
  const childrenArray = React.Children.toArray(children)
  if (
    src === void 0 &&
    childrenArray.length === 1 &&
    typeof childrenArray[0] === 'string'
  )
    src = childrenArray[0]
  return <Inner {...extraProps} src={src} />
})()

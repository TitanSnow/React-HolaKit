import React from 'react'
import styled from 'react-emotion'

const Headline = styled(({ level, ...extraProps }) => {
  if (!level) throw new Error('Headline level not specified')
  const H = 'h' + level
  return <H {...extraProps} />
})()

export default Headline

export const H1 = styled(props => <Headline {...props} level={1} />)()
export const H2 = styled(props => <Headline {...props} level={2} />)()
export const H3 = styled(props => <Headline {...props} level={3} />)()
export const H4 = styled(props => <Headline {...props} level={3} />)()

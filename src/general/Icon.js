import React from 'react'
import styled from 'react-emotion'
import './icon.css'

export default styled(({ children, className, alt, ...extraProps }) => {
  if (typeof children !== 'string')
    throw new Error('Icon only accepts one icon name as children')
  let iconClass
  if (children.startsWith('brand/')) {
    iconClass = `fab fa-${children.slice(6).replace(/_/g, '-')}`
  } else {
    iconClass = `material-icon-sharp-${children}`
  }
  className = className ? className + ' ' + iconClass : iconClass
  return (
    <span {...extraProps} className={className}>
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      {alt !== void 0 && <span style={{ fontSize: '0' }}>{alt}</span>}
    </span>
  )
})()

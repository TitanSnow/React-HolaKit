import React from 'react'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Card from './Card'
import { Columns, ColumnsItem } from '../general/Columns'
import Headline from './Headline'

const varCardGap = props => props.theme.cardGap

const StackTitleStyle = ({ light = false, theme: { textLightColor } }) =>
  css({
    lineHeight: '2em',
    color: light && textLightColor,
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })

const Inner = styled.div`
  ${StackTitleStyle};
  > ${Card} {
    margin-bottom: ${varCardGap};
    margin-top: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
const ColInner = styled(Columns)`
  ${StackTitleStyle};
  position: relative;
  column-width: 20rem;
  column-gap: 0;
  box-sizing: border-box;
  margin: 0 calc(${varCardGap} / -2);
  /* Due to some bugs in iOS Safari, column gap is simulated with paddings of column items.
  Of course we need to apply a pair of negative margin on column itself to make it align. */
  > ${ColumnsItem} {
    padding: calc(${varCardGap} / 2);
    box-sizing: border-box;
    > ${Card} {
      position: relative;
    }
  }
`

const extendClass = (base, cls) => {
  if (!base) return cls
  else return base + ' ' + cls
}

export default styled(
  withTheme(props => {
    const { children, container: Container = 'div', ...extraProps } = props
    const childrenArray = React.Children.toArray(children)
    let title
    if (childrenArray[0].type === Headline) {
      title = childrenArray.splice(0, 1)[0]
      title = React.cloneElement(title, {
        ...(!title.props.level && { level: 3 }),
        className: extendClass(
          title.props.className,
          StackTitleStyle({ theme: props.theme, light: title.props.light })
        ),
      })
    }
    let result
    if (Container !== Columns) {
      const Styled =
        Container === 'div' ? Inner : Inner.withComponent(Container)
      result = <Styled {...extraProps}>{childrenArray}</Styled>
    } else
      result = (
        <ColInner {...extraProps}>
          {childrenArray.map(child => (
            <ColumnsItem key={child.key}>{child}</ColumnsItem>
          ))}
        </ColInner>
      )
    if (title)
      return (
        <React.Fragment>
          {title}
          {result}
        </React.Fragment>
      )
    else return result
  })
)()

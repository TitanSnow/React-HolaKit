import React from 'react'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Card from './Card'
import { Columns, ColumnsItem } from '../general/Columns'
import Headline from './Headline'
import { ScrollableHori, ScrollableItem } from '../layouts/ScrollableHori'

const varCardGap = props => props.theme.cardGap

const StackTitleStyle = ({
  light = false,
  theme: { textLightColor, cardGap },
}) =>
  css({
    lineHeight: '2em',
    paddingBottom: `calc(${cardGap} / 4)`,
    paddingTop: `calc(${cardGap} / 2)`,
    color: light && textLightColor,
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })

const Inner = styled.div`
  > ${Card} {
    margin-bottom: ${varCardGap};
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ColInner = styled(Columns)`
  position: relative;
  column-width: 20rem;
  column-gap: 0;
  box-sizing: border-box;
  margin: calc(${varCardGap} / -2);
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
    const { children, layout: Container = Inner, ...extraProps } = props
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
    if (Container === Columns) {
      result = (
        <ColInner {...extraProps}>
          {childrenArray.map(child => (
            <ColumnsItem key={child.key}>{child}</ColumnsItem>
          ))}
        </ColInner>
      )
    } else if (Container === ScrollableHori) {
      result = (
        <Container {...extraProps}>
          {childrenArray.map(child => (
            <ScrollableItem key={child.key}>{child}</ScrollableItem>
          ))}
        </Container>
      )
    } else {
      result = <Container {...extraProps}>{childrenArray}</Container>
    }
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

/*

Card Stack

You have seen this in the basic section. But card stacks are more than a container
of cards.

We have card stack titles to name the whole stack of cards, and they can be in
both light and dark versions. In most cases you use dark versions, but in case
you're using our hero component, you may need to set the first stack title to
light version to match the dark blue extended hero background. Things can be much
different when you're using a picture for heros, or a custom primary color. Try
both color version to decide which suits best.

Card stacks can be used in combination with columns, and we automatically handle
card margins to have correct shadow rendering - browsers wraps not only content
but also any display effect applied to content in columns. Be aware, currently we
only support using card stack columns directly under `hola-container`.

*/

import React from 'react'
import styled from 'react-emotion'
import { CardStyled } from './Card'
import { Columns, ColumnsItem } from '../../'

const varCardGap = props => props.theme.cardGap
export const CardStackStyled = styled.div`
  > ${CardStyled} {
    margin-bottom: ${varCardGap};
    margin-top: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
export const CardStackColumnsStyled = styled(Columns)`
  position: relative;
  columns: 3 20rem;
  column-gap: 0;
  box-sizing: border-box;
  margin: 0 calc(${varCardGap} / -2);
  /* Due to some bugs in iOS Safari, column gap is simulated with paddings of column items.
  Of course we need to apply a pair of negative margin on column itself to make it align. */
  > ${ColumnsItem} {
    padding: calc(${varCardGap} / 2);
    box-sizing: border-box;
    > ${CardStyled} {
      position: relative;
    }
  }
`

export default function CardStack(props) {
  const { children, container: Container = 'div', ...extraProps } = props
  if (Container !== Columns) {
    const Styled =
      Container === 'div'
        ? CardStackStyled
        : CardStackStyled.withComponent(Container)
    return <Styled {...extraProps}>{children}</Styled>
  } else
    return (
      <CardStackColumnsStyled {...extraProps}>
        {React.Children.map(children, child => (
          <ColumnsItem>{child}</ColumnsItem>
        ))}
      </CardStackColumnsStyled>
    )
}

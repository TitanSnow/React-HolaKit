import styled, { css } from 'react-emotion'

export const ScrollableItem = styled.div()

export const ScrollableHori = styled.div(
  {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    overflowX: 'auto',
    '-webkit-overflow-scrolling': 'touch',
  },
  ({ theme: { cardGap } }) => css`
    > ${ScrollableItem} {
      margin: 0 calc(${cardGap} / 2);
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  `
)

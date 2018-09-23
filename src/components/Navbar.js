import React, { PureComponent } from 'react'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Container from '../layouts/Container'
import Link from '../general/Link'
import Icon from '../general/Icon'

const Inner = styled.div(
  {
    height: '5rem',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    '> nav': {
      lineHeight: '5rem',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      overflowX: 'auto',
      overflowY: 'hidden',
      '> a': {
        display: 'inline-block',
        fontSize: '1.2rem',
        textDecoration: 'none',
        transition: '0.3s color ease',
      },
      '&:first-child > a': {
        paddingRight: '1em',
      },
      '&:nth-child(2) > a': {
        paddingLeft: '1em',
      },
    },
  },

  ({ lightBg, darkBg }) => {
    if (lightBg && darkBg)
      throw new Error(
        "Navbar cannot has 'lightBg' and 'darkBg' at the same time"
      )
    return (
      (lightBg && {
        '> nav > a, + nav > a': {
          color: 'rgba(0, 0, 0, 0.6)',
        },
      }) ||
      (darkBg && {
        '> nav > a, + nav > a': {
          color: 'rgba(255, 255, 255, 0.9)',
        },
      })
    )
  }
)

const Outer = styled.header(
  ({ white }) =>
    white && {
      background: '#fff',
      marginBottom: '2rem',
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
    },
  ({ transparent }) =>
    transparent && {
      marginBottom: '-5rem',
    }
)

const Medium = styled.div(({ theme: { layoutDivide } }) => ({
  padding: '0 1.2rem',
  [`@media (max-width: ${layoutDivide})`]: {
    padding: '0 .5rem',
  },
}))

const toggleStyle = css({
  transform: 'scale(1.5)',
  transformOrigin: 'right center',
})

const Toggle = ({ open, className, ...extraProps }) => {
  className = className ? className + ' ' + toggleStyle : toggleStyle
  return (
    <Link {...extraProps} className={className} href="javascript:void 0">
      <Icon>{open ? 'close' : 'menu'}</Icon>
    </Link>
  )
}

class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  static getDerivedStateFromProps(
    {
      theme: { $layout },
    },
    state
  ) {
    if ($layout === 'small') return state
    else return { ...state, open: false }
  }

  render() {
    const {
      props: {
        wide = false,
        white = true,
        transparent = false,
        lightBg = true,
        darkBg = false,
        children,
        theme: { $layout },
        ...extraProps
      },
      state: { open },
    } = this
    const Med = wide ? Medium : Container
    const err = new Error("Navbar accepts one or two 'nav' as children")
    React.Children.forEach(children, child => {
      if (child.type !== 'nav') throw err
    })
    const childrenArray = React.Children.toArray(children)
    if (childrenArray.length === 0 || childrenArray.length > 2) throw err
    if ($layout === 'small') {
      const rn = childrenArray[1]
      const toggle = <Toggle open={open} onClick={this.toggleNav} />
      childrenArray[1] = React.cloneElement(rn, {
        children: (
          <React.Fragment>
            {open && rn.props.children}
            {toggle}
          </React.Fragment>
        ),
      })
    }
    return (
      <Outer {...extraProps} white={white} transparent={transparent}>
        <Med>
          <Inner lightBg={lightBg} darkBg={darkBg}>
            {open ? <nav /> : childrenArray[0]}
            {childrenArray[1]}
          </Inner>
        </Med>
      </Outer>
    )
  }

  toggleNav() {
    this.setState({ open: !this.state.open })
  }
}

export default styled(withTheme(Navbar))()

export const Brand = styled(Link)({
  fontWeight: 'bold',
})

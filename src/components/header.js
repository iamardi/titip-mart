import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(0, 0, 0, 0.6)`,
      marginBottom: `1.45rem`,
      height: `80px`,
      position: 'fixed',
      zIndex: 1020,
      right: 0,
      left: 0,
      top: 0,
      boxShadow: `0 2px 10px rgba(0,0,0,.09)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        border: `1px solid blue`,
        padding: '1em',
        position: 'relative',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

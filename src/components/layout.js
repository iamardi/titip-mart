/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
    margin: 0px auto;
    max-width: 960px;
    padding: '0 1.0875rem 1.45rem';
  `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
        <main>{children}</main>
        </Wrapper>
      <footer>
        <a href={`https://twitter.com/${data.site.siteMetadata.author}`}
        target="_blank">@{data.site.siteMetadata.author}</a> © {new Date().getFullYear()}, Built with love and Gatsby
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

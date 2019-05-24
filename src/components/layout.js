/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChalkboardTeacher, faChartLine, faCode, faRulerCombined } from '@fortawesome/free-solid-svg-icons'


import "./layout.css"

const Layout = ({ children }) => {
  library.add(faChalkboardTeacher, faChartLine, faCode, faRulerCombined)

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <div className="m-0 p-0">
          <main>{children}</main>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

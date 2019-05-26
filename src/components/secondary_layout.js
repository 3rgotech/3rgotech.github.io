/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Layout from "./layout"
import Logo from "./logo"

const SecondaryLayout = ({ children }) => {

  return (
    <Layout>
      <nav className="w-full bg-blue-600 px-6 py-1 flex justify-between">
        <div className="w-3/4 md:w-1/6 mr-6">
          <div className="w-full mx-auto">
            <Logo />
          </div>
        </div>
        <div className="my-auto">
          <Link to="/" className="inline-block btn-sm btn-white">Accueil</Link>
        </div>
      </nav>

      {children}
    </Layout>
  )
}

SecondaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SecondaryLayout

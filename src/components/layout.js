/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

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
          <section id="footer" className="text-center text-white py-10">
            {/* <ul className="icons">
              <li><a href="/" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="/" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="/" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul> */}
            <ul className="copyright">
              <p className="lead">
                Copyright &copy; 3rgo.tech {(new Date()).getFullYear() !== 2018 ? "2018 - " + (new Date()).getFullYear() : "2018"}
                {` - `}
                <Link to="/legal/">Mentions L&eacute;gales</Link>
              </p>
              <p className="">
                <small>
                  Built with <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>.<br />
                  Based on Photon theme by <a target="_blank" rel="noopener noreferrer" href="https://html5up.net/">HTML5 UP</a> (licensed <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>)
                </small>
              </p>
            </ul>
          </section>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

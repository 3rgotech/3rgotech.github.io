/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
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
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <section id="footer">
            {/* <ul class="icons">
              <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
              <li><a href="#" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
            </ul> */}
            <ul class="copyright">
              <p className="lead">
                Copyright &copy; 3rgo.tech {(new Date()).getFullYear() !== 2018 ? "2018 - " + (new Date()).getFullYear() : "2018"}
                {` - `}
                <Link to="/legal/">Mentions L&eacute;gales</Link>
              </p>
              <p className="font-weight-light">
                <small>
                  Built with <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>.<br />
                  Based on Photon theme by <a target="_blank" rel="noopener noreferrer" href="https://html5up.net/">HTML5 UP</a> (licensed <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>)
                </small>
              </p>
            </ul>
          </section>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

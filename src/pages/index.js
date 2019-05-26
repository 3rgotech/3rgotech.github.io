import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Logo = () => (<div className="w-3/4 mx-auto">
  <StaticQuery
    query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "logo.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
</div>)

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <section id="header" className="w-full h-screen pt-64 text-center text-white">
      <div className="inner w-1/2 mx-auto">
        <div className="w-3/4 mx-auto">
          <Logo />
        </div>
        <h1 className="text-4xl mt-4">
          Hi, I'm <strong>Photon</strong>, another fine<br />
          little freebie from <a href="http://html5up.net">HTML5 UP</a>.
        </h1>
        <p className="text-xl">Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
          lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        <ul className="actions relative text-center mt-32 pb-2">
          <li>
            <ScrollLink
              to="one"
              smooth={true}
              offset={0}
              duration={500}
              className="btn btn-white"
            >
              En Savoir Plus
            </ScrollLink>
          </li>
        </ul>
        <div className="absolute left-1/2 bg-white w-px h-64 mt-px">&nbsp;</div>
      </div>
    </section>

    <section id="one" className="">
      <div className="md:flex p-16">
        <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2 md:py-8 md:pr-16 text-gray-700">
          <div className="text-5xl pb-8">Présentation</div>
          <div className="h-px bg-gray-700 w-1/4">&nbsp;</div>
          <p className="mt-8 text-lg">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
        <div className="md:flex-shrink-0 md:w-1/2">
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "header.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
          />
        </div>
      </div>
    </section>

    <section id="two" className="bg-gray-600 md:flex p-16">
      <div className="md:flex-shrink-0 md:w-1/2">
        <div id="icons" className="md:flex md:flex-wrap md:justify-center md:py-8">
          <div className="border border-white rounded md:w-1/2 px-8 py-10 m-12">
            <div className="w-full h-full text-blue-500">
              <FontAwesomeIcon fixedWidth size="4x" icon="ruler-combined" />
            </div>
          </div>
          <div className="border border-white rounded md:w-1/2 px-8 py-10 m-12">
            <div className="w-full h-full text-blue-600">
              <FontAwesomeIcon fixedWidth size="4x" icon="code" />
            </div>
          </div>
          <div className="border border-white rounded md:w-1/2 px-8 py-10 m-12">
            <div className="w-full h-full text-blue-700">
              <FontAwesomeIcon fixedWidth size="4x" icon="chart-line" />
            </div>
          </div>
          <div className="border border-white rounded md:w-1/2 px-8 py-10 m-12">
            <div className="w-full h-full text-blue-800">
              <FontAwesomeIcon fixedWidth size="4x" icon="chalkboard-teacher" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2 md:py-8 md:pr-16">
        <div className="text-5xl pb-8">Compétences</div>
        <div className="h-px bg-white w-1/4">&nbsp;</div>
        <p className="mt-8 text-lg">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </section>

    <section id="three" className="bg-white py-8 px-2 text-gray-700">
      <div className="text-5xl pb-8 text-center">Clients</div>
      <div className="h-px bg-gray-700 w-1/4 mx-auto">&nbsp;</div>
      <div className="md:flex md:flex-wrap md:justify-center md:px-16">
        <div className="w-3/4 md:w-1/4 m-6">
          <div className="w-full mx-auto bg-gray-300 rounded-lg p-4">
            <Logo />
          </div>
          <h3 className="text-3xl my-6 text-center">Magna feugiat lorem</h3>
          <p className="text-lg">
            Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
          </p>
          <ul className="actions text-center mt-10 pb-2">
            <li><a href="#" className="btn btn-gray">More</a></li>
          </ul>
        </div>
        <div className="w-3/4 md:w-1/4 m-6">
          <div className="w-full mx-auto bg-gray-300 rounded-lg p-4">
            <Logo />
          </div>
          <h3 className="text-3xl my-6 text-center">Magna feugiat lorem</h3>
          <p className="text-lg">
            Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
          </p>
          <ul className="actions text-center mt-10 pb-2">
            <li><a href="#" className="btn btn-gray">More</a></li>
          </ul>
        </div>
        <div className="w-3/4 md:w-1/4 m-6">
          <div className="w-full mx-auto bg-gray-300 rounded-lg p-4">
            <Logo />
          </div>
          <h3 className="text-3xl my-6 text-center">Magna feugiat lorem</h3>
          <p className="text-lg">
            Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
          </p>
          <ul className="actions text-center mt-10 pb-2">
            <li><a href="#" className="btn btn-gray">More</a></li>
          </ul>
        </div>
        <div className="w-3/4 md:w-1/4 m-6">
          <div className="w-full mx-auto bg-gray-300 rounded-lg p-4">
            <Logo />
          </div>
          <h3 className="text-3xl my-6 text-center">Magna feugiat lorem</h3>
          <p className="text-lg">
            Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
          </p>
          <ul className="actions text-center mt-10 pb-2">
            <li><a href="#" className="btn btn-gray">More</a></li>
          </ul>
        </div>
        <div className="w-3/4 md:w-1/4 m-6">
          <div className="w-full mx-auto bg-gray-300 rounded-lg p-4">
            <Logo />
          </div>
          <h3 className="text-3xl my-6 text-center">Magna feugiat lorem</h3>
          <p className="text-lg">
            Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
          </p>
          <ul className="actions text-center mt-10 pb-2">
            <li><a href="#" className="btn btn-gray">More</a></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="four" className="bg-gray-600 p-16 text-white">
      <div className="mx-auto">
        <div className="text-5xl pb-8 text-center">Contact</div>
        <div className="h-px bg-white w-1/4 mx-auto">&nbsp;</div>
        <form action="https://formspree.io/romain@3rgo.tech" method="POST" class="w-3/4 md:w-1/2 mx-auto my-8">
          <input type="hidden" name="_subject" value="Contact via le site 3rgo.tech" />
          <input type="text" name="_gotcha" className="hidden" />
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="name">
              Nom
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nom" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="email">
              E-mail
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="_replyto" type="email" placeholder="E-mail" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="message">
              Message
            </label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" type="text" placeholder="Message" rows="6"></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn-white" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>

    <section id="footer" className="text-center text-white py-10">
      {/* <ul className="icons">
              <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
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
  </Layout>
)

export default IndexPage

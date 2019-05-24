import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <section id="header" className="w-full py-32 text-center text-white font-light">
      <div className="inner w-1/2 mx-auto">
        <div className="w-3/4 mx-auto">
          <Image />
        </div>
        <h1 className="text-4xl mt-4">
          Hi, I'm <strong>Photon</strong>, another fine<br />
          little freebie from <a href="http://html5up.net">HTML5 UP</a>.
        </h1>
        <p className="text-xl">Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
          lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        <ul className="actions relative text-center mt-10 pb-2">
          <li>
            <a href="#one" className="border border-solid border-white rounded py-3 px-8 uppercase text-xl font-bold scrolly">Discover</a>
          </li>
        </ul>
        <div className="absolute left-1/2 bg-white w-px h-screen mt-px">&nbsp;</div>
      </div>
    </section>

    <section id="one" className="main style1">
      <div className="md:flex py-8 px-2">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img className="rounded-lg md:w-56" src="images/pic01.jpg" alt="Woman paying for a purchase" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2">
          <div className="text-3xl pb-8 mr-16 border-b border-gray-600">Marketing</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>Lorem ipsum dolor adipiscing<br />
                amet dolor consequat</h2>
            </header>
            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <span className="image fit"><img src="" alt="" /></span>
          </div>
        </div>
      </div>
    </section>

    <section id="two" className="main style2">
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <ul className="major-icons">
              <li><span className="icon style1 major fa-code"></span></li>
              <li><span className="icon style2 major fa-bolt"></span></li>
              <li><span className="icon style3 major fa-camera-retro"></span></li>
              <li><span className="icon style4 major fa-cog"></span></li>
              <li><span className="icon style5 major fa-desktop"></span></li>
              <li><span className="icon style6 major fa-calendar"></span></li>
            </ul>
          </div>
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>Lorem ipsum dolor adipiscing<br />
                amet dolor consequat</h2>
            </header>
            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Adipiscing amet consequat</h2>
        </header>
        <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <span className="image fit"><img src="images/pic02.jpg" alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions special">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <span className="image fit"><img src="images/pic03.jpg" alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions special">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <span className="image fit"><img src="images/pic04.jpg" alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions special">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="four" className="main style2 special">
      <div className="container">
        <header className="major">
          <h2>Ipsum feugiat consequat?</h2>
        </header>
        <p>Sed lacus nascetur ac ante amet sapien.</p>
        <ul className="actions special">
          <li><a href="#" className="button wide primary">Sign Up</a></li>
          <li><a href="#" className="button wide">Learn More</a></li>
        </ul>
      </div>
    </section>

    <section id="footer" className="text-center text-white font-light py-10">
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
        <p className="font-weight-light">
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

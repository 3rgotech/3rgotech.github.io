import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <section id="header">
      <div class="inner">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
          little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
        <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
          lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        <ul class="actions special">
          <li><a href="#one" class="button scrolly">Discover</a></li>
        </ul>
      </div>
    </section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import SecondaryLayout from "../components/secondary_layout"
import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <SecondaryLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <Img sizes={frontmatter.image.childImageSharp.sizes} />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.location}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </SecondaryLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        location
        image {
          childImageSharp{
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
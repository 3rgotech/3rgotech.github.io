import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const ArticleItem = ({ post }) => {
  return (
    <div className="w-3/4 md:w-1/4 mx-auto mt-6 md:m-6">
      <div className="w-full mx-auto bg-gray-200 rounded-lg p-4">
        <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
      </div>
      <h3 className="text-3xl my-6 text-center">{post.frontmatter.title}</h3>
      <p className="text-lg">
        {post.frontmatter.excerpt}
      </p>
      <ul className="actions text-center mt-10 pb-2">
        <li>
          <Link to={post.frontmatter.path} className="btn btn-gray">
            Plus
          </Link>
        </li>
      </ul>
    </div>
  )
}

ArticleItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default ArticleItem

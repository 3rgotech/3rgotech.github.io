import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleItem = ({ post }) => {
  return (
    <div className="w-3/4 md:w-1/4 mx-auto mt-6 md:m-6 rounded-lg shadow-lg text-center">
      <div className="w-full mx-auto bg-gray-500 p-4 flex items-center justify-center" style={{ height: 280 }}>
        <Img
          fixed={post.frontmatter.clientImage.childImageSharp.fixed}
          imgStyle={{
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
        />
      </div>
      <h3 className="text-3xl mt-4 mb-2">{post.frontmatter.title}</h3>
      <h4 className="text-xl">{post.frontmatter.excerpt}</h4>
      <ul className="actions mt-6 mb-6">
        <li>
          <Link to={post.frontmatter.path} className="btn-sm btn-gray">
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

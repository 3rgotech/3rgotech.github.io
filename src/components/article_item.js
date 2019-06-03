import React from "react"
import PropTypes from "prop-types"

import Logo from "./logo"

const ArticleItem = (props) => {
  return (
    <div className="w-3/4 md:w-1/4 mx-auto mt-6 md:m-6">
      <div className="w-full mx-auto bg-gray-200 rounded-lg p-4">
        <Logo />
      </div>
      <h3 className="text-3xl my-6 text-center">Magna feugiat lorem</h3>
      <p className="text-lg">
        Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.
          </p>
      <ul className="actions text-center mt-10 pb-2">
        <li><a href="/" className="btn btn-gray">More</a></li>
      </ul>
    </div>
  )
}

ArticleItem.propTypes = {
  color: PropTypes.string.isRequired,
}

export default ArticleItem

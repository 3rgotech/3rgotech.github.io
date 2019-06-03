import React from "react"
import PropTypes from "prop-types"

const Title = ({ color, children }) => {
  return (
    <>
      <div className={`text-5xl pb-8 text-center text-${color}`}>{children}</div>
      <div className={`h-px bg-${color} w-1/4 mx-auto`}>&nbsp;</div>
    </>
  )
}

Title.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Title

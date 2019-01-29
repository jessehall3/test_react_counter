import React from 'react'

const Button = ({ integer, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(integer)
  }
  const plus_sign = integer > 0 ? "+" : ""
  return <button onClick={handleClick}>{plus_sign}{integer}</button>
}

export default Button

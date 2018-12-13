import React from 'react'
import { Link } from 'react-router-dom'

function NotFound () {
  return (
    <div>
      <h1>Oops!</h1>
      <h2>404 - The Book not found</h2>
      <Link to='/'>Go To Homepage</Link>
    </div>
  )
}

export default NotFound
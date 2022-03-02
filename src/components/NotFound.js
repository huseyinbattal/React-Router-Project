import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
      <div>
          <h2>ERROR 404! Page Not Found</h2>
          <p>Go to</p>
          <Link to="/">My Home Page</Link>
    </div>
  )
}

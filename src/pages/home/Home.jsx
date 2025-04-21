import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={'/auth'}>LOGIN</Link>
    </div>
  )
}

export default Home
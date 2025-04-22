import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="w-full h-dvh flex justify-center items-center">
     <Link to={'/auth'}> <button className='px-4 py-2 bg-red-50 border-b-2 text-red-800 cursor-pointer border-b-red-600 rounded'>LOGIN</button> </Link>
      </div> 
    </>
  )
}

export default Home
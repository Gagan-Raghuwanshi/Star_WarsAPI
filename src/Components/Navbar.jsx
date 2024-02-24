import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className=' h-12 w-full bg-red-400 flex gap-16 justify-center items-center text-lg shadow-lg sticky top-0 hover:cursor-pointer '>
            <Link to="/" >
                Home
            </Link>
            <Link to="/people" >
                People
            </Link>
            <Link to="/planets" >
                Planets
            </Link>

        </div>
    </>
  )
}

export default Navbar
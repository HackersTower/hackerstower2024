import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-[#121212] text-white '>
    <nav className="py-4 px-8 flex justify-between items-center border-b border-gray-700">
    <span className="text-2xl font-bold">HackersTower</span>
    <div className="space-x-4">
      <Link className="text-gray-300 hover:text-white" href="#">
        Home
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        Blog
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        Workshop
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        Courses
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        About Us
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        Contact Us
      </Link>
      <Button className="bg-[#bd1e59] text-white hover:bg-[#a31648]" >Login</Button>
    <Button className="bg-[#bd1e59] text-white hover:bg-[#a31648]" >Sign</Button>
    </div>
    
  </nav>
  </div>
  )
}

function ShieldIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    )
  }

export default Navbar
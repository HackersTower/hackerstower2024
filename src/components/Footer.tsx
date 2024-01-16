import React from 'react'
import Link from 'next/link'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#121212] text-white'>
    <footer className="py-4 px-8 border-t border-gray-700 text-center">
    <p>© 2024 All Rights Reserved by HackersTower.</p>
    <div className="flex justify-center space-x-4 mt-2">
      <Link className="text-gray-300 hover:text-white" href="#">
        Terms & Conditions
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        Cancellation & Refund Policy
      </Link>
    </div>
    <div className="flex justify-center space-x-4 mt-2">
      <Link className="text-gray-300 hover:text-white" href="#">
        <FacebookIcon className="h-5 w-5" />
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        <TwitterIcon className="h-5 w-5" />
      </Link>
      <Link className="text-gray-300 hover:text-white" href="#">
        <LinkedinIcon className="h-5 w-5" />
      </Link>
    </div>
  </footer>
  </div>
  )
}

function FacebookIcon(props:any) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props:any) {
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props:any) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }

export default Footer
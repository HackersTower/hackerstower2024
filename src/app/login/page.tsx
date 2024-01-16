import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
type Props = {}

const page = (props: Props) => {
  return (
<section className="py-16 px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">SIGN UP</h2>
          <p className="text-gray-400">Join our community and start learning today!</p>
        </div>
        <div className="flex flex-col items-center">
          
          <Input className="mb-4 w-full md:w-1/2" placeholder="Email" />
          <Input className="mb-4 w-full md:w-1/2" placeholder="Password" type="password" />

          <Button className="bg-[#bd1e59] text-white w-full md:w-1/2">Login</Button>
        </div>
      </section>
  )
}

export default page
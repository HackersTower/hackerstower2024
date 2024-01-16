import Image from 'next/image'
import Link from 'next/link'
import {  CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <main className="">
         
         <div className="bg-[#121212] text-white min-h-screen">
     
      <section className="py-16 px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">WANT TO LEARN Coding?</h1>
            <p className="mb-6">
              We provide FREE hands-on training in various fields of computer science and have an inclusive community
              focusing on a learn by doing approach. Complete a solution for all your enterprise needs, including
              learning resources, communities to be a part of, opportunities, and much more.
            </p>
            <Button className="bg-[#bd1e59] text-white hover:bg-[#a31648]">Get started</Button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              alt="Coding illustration"
              className="max-w-full h-auto"
              height="300"
              src="/sideImage.svg"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">FEATURES</h2>
          <p className="text-gray-400">What makes our courses special?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gray-800 text-white">
            <CardContent>
              <BookIcon className="text-[#bd1e59] mb-4" />
              <h3 className="text-xl font-bold mb-2">Structured Learning</h3>
              <p className="text-gray-400 mb-4">
                Learning made easy. Complete syllabus is covered while never compromising on quality.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardContent>
              <PencilIcon className="text-[#bd1e59] mb-4" />
              <h3 className="text-xl font-bold mb-2">Notes</h3>
              <p className="text-gray-400 mb-4">
                Get complete notes for all lectures so that you can focus on learning and practicing.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardContent>
              <ActivityIcon className="text-[#bd1e59] mb-4" />
              <h3 className="text-xl font-bold mb-2">Assignments</h3>
              <p className="text-gray-400 mb-4">
                Assignments and questions are provided to understand the concepts well.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardContent>
              <HeadphonesIcon className="text-[#bd1e59] mb-4" />
              <h3 className="text-xl font-bold mb-2">Doubt Support</h3>
              <p className="text-gray-400 mb-4">Clear all your doubts through LIVE discord support.</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Button className="bg-[#bd1e59] text-white hover:bg-[#a31648]">Get started</Button>
        </div>
      </section>

    </div>


    </main>
  )
}


function ActivityIcon(props:any) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function BookIcon(props:any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
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


function HeadphonesIcon(props:any) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
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


function PencilIcon(props:any) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
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

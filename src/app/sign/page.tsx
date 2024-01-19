"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trpc } from '../_trpc/client'
type Props = {}

const Sign = (props: Props) => {
  const [info,setInfo] = useState({fullName:"", email:"", password:"", cPassword:""});
  const mutation  = trpc.sing.useMutation();
  const onChangeHandler = (e:any)=>{
    setInfo({...info,[e.target.name]:[e.target.value]});
    console.log(info);
  }

  const onClickHandler = (e:any)=>{
    e.preventDefault();
    //const {fullName,email,password,cPassword} = info;
   
   mutation.mutate({fullName:info.fullName[0], email:info.email[0], password:info.password[0],cPassword:info.cPassword[0]})
  }
   

  return (
<section className="py-16 px-8 ">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">SIGN UP</h2>
          <p className="text-gray-400">Join our community and start learning today!</p>
        </div>
        <div className="flex flex-col items-center">
          <Input className="mb-4 w-full md:w-1/2" placeholder="Full Name" name="fullName" onChange={onChangeHandler} />
          <Input className="mb-4 w-full md:w-1/2" placeholder="Email" name="email"  onChange={onChangeHandler}/>
          <Input className="mb-4 w-full md:w-1/2" placeholder="Password" type="password" name="password" onChange={onChangeHandler} />
          <Input className="mb-4 w-full md:w-1/2" placeholder="Confirm Password" type="password" name="cPassword" onChange={onChangeHandler} />
          <Button className="bg-[#bd1e59] text-white w-full md:w-1/2" onClick={onClickHandler}>{mutation.isPending?"Loading...":"Sing Up"}</Button>
          {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
        </div>
      </section>
  )
}

export default Sign
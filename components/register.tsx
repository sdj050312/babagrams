'use client'
import React, { useState } from 'react'

export default function Register() {
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
      <div className='w-80  text-center h-80 flex items-center justify-center flex-col bg-white rounded-lg '>
        <h1 className='mb-4 text-2xl font-bold'>회원 가입</h1>
        <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder='email' className='border-solid border-2 p-2 border-black mb-2 rounded-lg'/>
      
        <input type="password"value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='password' className='border-solid p-2 border-2 border-black rounded-lg'/>
        <button type="submit" className='bg-blue-500 mt-5 p-2 rounded-lg text-white font-bold'>회원가입</button>
        
    </div>
    </div>
  )
}

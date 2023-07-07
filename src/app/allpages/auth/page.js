"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import keysCarrying from '../../assets/keys-carrying.png'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slice/reduxSlice'
import { user } from './mock/page'
import { Button } from '@mui/material'

const login = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (

    <main className=''>
      <div>
      <div className='flex items-center justify-evenly mt-[12rem]'>
        <div className=''>
          <Image
            src={keysCarrying}
            width={400}
            height={400}
            alt="Picture of keyscarrying"
          />
        </div>
        <div className='flex flex-col'>
          <h2 className='flex font-bold text-[22px] mb-10'>Credentials Manager</h2>
          <form className='flex flex-col'>
            <div className='mb-4 flex justify-start items-center'>
              <label className=' text-[20px] mr-6 font-regular'>User ID</label>
              <input className='rounded-[44px] p-[3px] ml-[18px] 
              focus:outline-none
             placeholder:text-[#D9D9D9] placeholder:p-[15px] placeholder:text-start'
                type="text" id="username" name="username" placeholder='Username' />
            </div>
            <div className='mb-2 flex justify-start items-center'>
              <label className='font-regular text-[20px] mr-6'>Password</label>
              <input className='rounded-[44px] p-[3px]
            focus:outline-none placeholder:text-[#D9D9D9] placeholder:p-[15px] placeholder:text-start'
                type="password" id="password" name="password" placeholder='*******' />
            </div>
            <div className='flex justify-end'>
              <Button className='w-[100px] h-[35px] text-[#fff] bg-[#F4B63F] rounded-3xl hover:bg-[#F4B63F]'>login</Button>
            </div>
            
          </form>
          {/* <div>
          <div> <span>counter:  {count}</span></div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>inc</button>

              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>dec</button>
          </div> */}
        </div>
      </div>
      <div className='flex justify-center items-center bg-[#8B8680] fixed bottom-0 w-[100%] h-[50px] '>
       <div className='text-[#fff] font-normal text-[15px] '>Botnostic solution Logo </div> 
       <div className='text-[#fff] font-normal text-[15px] ml-2'>©2023 Botnostic Solutions (PVT) Ltd, All Rights Reserved</div>
      </div>
      </div>
    </main>

  )
}

export default login
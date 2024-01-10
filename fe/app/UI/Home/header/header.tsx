import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[1528px] h-[610px] bg-transparent border border-[#D9D9D9] rounded-lg'>
        <div className='flex items-center justify-between'>
          <div className=''>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <span>Order Restaurant food, takeaway and groceries.</span>
                <span>Feast Your,</span>
                <span>Fast and Fresh</span>
              </div>
              <div className='space-y-3'>
                <span>Enter a postcode to see what we deliver</span>
                <div className='flex '>
                  <input
                    type='text'
                    className='w-[373px] h-[59px] rounded-full relative p-5 outline-none border border-[#D9D9D9]'
                    placeholder='youremail@gmail.com'
                  />
                  <div className='w-[171px] h-[59px] bg-[#FC8A06] rounded-full relative right-[150px] flex justify-center items-center text-white font-semibold text-lg leading-normal'>
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <Image
                src={'/header2.png'}
                alt=''
                width={805}
                height={537}
                className='relative bottom-[85px] left-[200px] z-10'
              />
              <Image
                src={'/header1.png'}
                alt=''
                width={377}
                height={455}
                className='relative'
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <div
              className='w-[626px] h-[565px] bg-[#FC8A06]'
              style={{ borderRadius: '282.5px 0px 12px 0px' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

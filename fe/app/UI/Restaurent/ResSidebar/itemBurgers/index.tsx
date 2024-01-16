import Image from 'next/image'
import React from 'react'

const Burgers = () => {
  return (
    <div className='flex justify-center mt-14'>
      <div className='w-[1549px] h-40'>
        <h1>Burgers</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div className='w-[496px] h-[245px] flex-shrink-0 shadow-2xl bg-[#FDFDFD] rounded-2xl'>
            <div className='flex justify-between p-5'>
              <div className='flex flex-col gap-5'>
                <h1>Royal Cheese Burger with extra Fries</h1>
                <span>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                </span>
                <span>GBP 23.10</span>
              </div>
              <div className='relative'>
                <Image
                  src={'/resLayout/pro1.png'}
                  alt=''
                  width={200}
                  height={0}
                  className='w-auto'
                />
                <div className='w-[97px] h-[89px] rounded-tl-3xl bg-white absolute -right-1 -bottom-0 flex justify-center items-center cursor-pointer'>
                  <div className='w-[49px] h-[49px] rounded-full bg-black text-white flex justify-center items-center text-center'>
                    <span className='font-bold text-3xl'>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  )
}

export default Burgers

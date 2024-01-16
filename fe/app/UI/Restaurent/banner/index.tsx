/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
const BannerRes = () => {
  return (
    // <div className="">
    //   {/* <div className="absolute right-0 bottom-0 w-1/2 h-1/2"> */}
    //   <div className="w-1/2 h-1/2">
    //     <Image
    //       className="object-contain opacity-20"
    //       src="/resLayout/res1.png"
    //       alt=""
    //       width={500}
    //       height={500}
    //     />
    //   </div>
    //   {/* </div> */}
    // </div>
    <div className='flex justify-center mt-10'>
      <div className='w-[1579px] h-[500px] bg-[#D9D9D9] rounded-2xl'>
        <div className='p-5 pb-6 rounded-xl mb-5 relative left-[400px] '>
          <div className='absolute w-1/2 h-1/2'>
            <Image
              className='object-contain opacity-20 bg-transparent'
              src='/resLayout/res1.png'
              alt=''
              width={750}
              height={400}
            />
          </div>
        </div>
        <div className='flex justify-between items-center p-6'>
          <div className='flex flex-col gap-10 justify-center p-6 relative'>
            <span className='font-medium text-xl'>I'm lovin it!</span>
            <h1 className='font-semibold text-[54px] leading-7'>
              McDonald’s East London
            </h1>
            <div className='flex gap-3'>
              <div className='py-3 px-3 w-[320px] bg-black rounded-full'>
                <div className='flex items-center text-white justify-center gap-4 font-semibold text-lg '>
                  <Image src={'/svg/orCom.png'} alt='' width={34} height={34} />
                  <span>Minimum Order: 12 GBP</span>
                </div>
              </div>
              <div className='py-3 px-2 w-[320px] bg-black rounded-full'>
                <div className='flex items-center text-white justify-center gap-4 font-semibold text-lg '>
                  <Image src={'/svg/moto.png'} alt='' width={34} height={34} />
                  <span>Delivery in 20-25 Minutes</span>
                </div>
              </div>
            </div>
          </div>
          <Image
            className='relative top-32 left-28 z-10'
            src='/resLayout/res3.png'
            alt=''
            width={136}
            height={158}
          />
          <div>
            <Image
              className='relative'
              src='/resLayout/res2.png'
              alt=''
              width={581}
              height={361}
            />
          </div>
        </div>
        <div className='px-3 py-3 bg-[#FC8A06] w-[300px] relative top-0 rounded-r-2xl'>
          <div className='flex items-center gap-4 justify-center '>
            <Image
              className='relative'
              src='/Clock.png'
              alt=''
              width={34}
              height={34}
            />
            <span className='text-white font-semibold text-lg leading-6'>
              Open until 3:00 AM
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerRes

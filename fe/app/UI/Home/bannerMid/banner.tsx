import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[1528px] h-[651px] bg-[#D9D9D9] rounded-2xl'>
          <div>
            <div className='flex'>
              <Image
                src={'/banner2.png'}
                alt=''
                width={832}
                height={651}
                className='relative bottom-[40px] z-10'
              />
              <div className='flex flex-col gap-4 justify-center'>
                <div>
                  <div className='flex gap-4 items-center'>
                    <div>
                      <Image
                        src={'/logo.png'}
                        alt=''
                        width={215}
                        height={53}
                        className='cursor-pointer'
                      />
                    </div>
                    <div>
                      <span className='font-bold text-[68px] tracking-tight leading-normal'>
                        ing is more{' '}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='w-[878px] h-[90px] rounded-full bg-black relative right-[242px]'>
                  <p className='text-white font-medium leading-normal text-[54px] cursor-pointer flex justify-end items-center mr-12'>
                    <span className='text-[#FC8A06] underline '>
                      {'Personalised' + '  '}
                    </span>
                    & Instant
                  </p>
                </div>
                <span className='text-2xl font-normal leading-normal'>
                  Download the Order.uk app for faster ordering
                </span>
                <div className='flex gap-3 items-center ml-5'>
                  <div className='w-[200px] h-[53px] bg-black rounded-lg flex items-center justify-center'>
                    <Image
                      src={'/appstore.svg'}
                      alt='2'
                      width={180.5}
                      height={53}
                    />
                  </div>
                  <Image
                    src={'/ggplat.svg'}
                    alt='2'
                    width={180.5}
                    height={53}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='justify-center flex mt-5'>
        <div className='flex gap-5 justify-end'>
          <div className='w-[754px] h-[425px] flex-shrink-0 bg-slate-500 rounded-2xl'>
            <div className='w-[288px] h-[63px] bg-white rounded-b-xl ml-16 flex justify-center items-center'>
              <span>Earn more with lower fees</span>
            </div>
            <div className='mt-[70px] p-10'>
              <div className='flex flex-col gap-4 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Signup as a business
                </span>
                <h1 className='text-white font-bold text-[44px] leading-normal'>
                  Partner with us
                </h1>
                <button className='px-5 py-2 bg-[#FC8A06] text-lg font-normal rounded-full text-white w-[205px]'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className='w-[754px] h-[425px] flex-shrink-0 bg-slate-500 rounded-2xl'>
            <div className='w-[288px] h-[63px] bg-white rounded-b-xl ml-16 flex justify-center items-center'>
              <span>Earn more with lower fees</span>
            </div>
            <div className='mt-[70px] p-10'>
              <div className='flex flex-col gap-4 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Signup as a business
                </span>
                <h1 className='text-white font-bold text-[44px] leading-normal'>
                  Partner with us
                </h1>
                <button className='px-5 py-2 bg-[#FC8A06] text-lg font-normal rounded-full text-white w-[205px]'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner

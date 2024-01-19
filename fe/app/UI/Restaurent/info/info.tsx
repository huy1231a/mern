import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[1528px] h-[659px] rounded-2xl bg-[#FBFBFB] shadow-xl'>
        <div className='flex gap-4'>
          <div className='w-[496px] h-[659px] p-8'>
            <div className='flex flex-col gap-7'>
              <div className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-8 h-8'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                  />
                </svg>
                <span className='font-bold text-3xl leading-10'>
                  Delivery information
                </span>
              </div>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Monday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Tuesday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Wesnenday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Thursday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Friday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Saturday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Sunday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>
                  Estimated time until delivery:
                </span>{' '}
                20 min
              </span>
            </div>
          </div>
          <div className='bg-transparent w-[496px] h-[659px] p-8'>
            <div className='flex flex-col gap-7'>
              <div className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-8 h-8'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z'
                  />
                </svg>

                <span className='font-bold text-3xl leading-10'>
                  Contact information
                </span>
              </div>
              <span className='ml-3'>
                If you have allergies or other dietary
              </span>
              <span className='ml-3'>
                restrictions, please contact the restaurant.
              </span>
              <span className='ml-3'>
                The restaurant will provide food-specific
              </span>
              <span className='ml-3'>information upon request.</span>
              <span className='text-lg font-bold leading-8 ml-3'>
                Phone number:
              </span>
              <span className='ml-3'>+934443-43</span>
              <span className='text-lg font-bold leading-8 ml-3'>Website:</span>
              <span className='ml-3'>http://mcdonalds.uk/</span>
            </div>
          </div>
          <div className='bg-[#03081F] w-[496px] h-[659px] p-8 text-white'>
            <div className='flex flex-col gap-7'>
              <div className='flex gap-4 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-8 h-8'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>

                <span className='font-bold text-3xl leading-10'>
                  Operational Times
                </span>
              </div>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Monday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Tuesday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Wesnenday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Thursday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Friday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Saturday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
              <span className='ml-3'>
                <span className='text-lg font-bold leading-8'>Sunday:</span>{' '}
                12:00 AM–3:00 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info

'use client'
import Image from 'next/image'
import React from 'react'
import Burgers from './itemBurgers'
import Fries from './itemFies'
import Cold from './itemColdDrinks'

interface Menu {
  id: number
  name: string
}

const Sidebar = () => {
  const menu: any = [
    {
      id: 1,
      name: 'Offers',
    },
    {
      id: 2,
      name: 'Burgers',
    },
    {
      id: 4,
      name: 'Fries',
    },
    {
      id: 5,
      name: 'Cold drinks',
    },
    {
      id: 6,
      name: 'Happy Meal®',
    },
    {
      id: 7,
      name: 'Desserts',
    },
    {
      id: 8,
      name: 'Hot drinks',
    },
    {
      id: 9,
      name: 'Salads',
    },
    {
      id: 10,
      name: 'Sauces',
    },
    {
      id: 11,
      name: 'Orbit®',
    },
  ]

  const [active, setActive] = React.useState<string | null | number>(null)

  const handleClick = (menuId: number) => {
    setActive(menuId)
  }

  React.useEffect(() => {
    setActive(1)
  }, [])
  console.log('aactive', active)
  return (
    <>
      <div className='flex justify-center mt-14'>
        <div className='w-[1549px] h-40'>
          <div className='flex justify-between items-center p-5'>
            <span className='font-bold text-3xl leading-normal'>
              All Offers from McDonald’s East London
            </span>
            <div className='flex w-[344px] h-[63px] items-center rounded-full border border-[#03081F] '>
              <div className='flex p-6 gap-5 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
                <input
                  type='text'
                  name=''
                  id=''
                  className='rounded-full w-[260px] h-8 outline-none px-3 py-3'
                  placeholder='Search From Menu....'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[100px] bg-[#0000001A]'>
        <div className='p-7'>
          <div className='flex justify-around items-center '>
            {menu.map((item: Menu) => (
              <>
                <div
                  key={item.id}
                  className={`${
                    active === item.id
                      ? 'w-[200px] h-[40px] bg-black text-white text-xl font-bold'
                      : 'text-black text-xl font-bold'
                  } flex justify-center items-center rounded-full cursor-pointer transition duration-200 ease-in-out hover:scale-110`}
                  onClick={() => handleClick(item.id)}>
                  {item.name}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-14'>
        <div className='w-[1549px] h-auto bg-transparent'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='relative'>
              <div className='w-[88px] h-[66px] rounded-b-2xl bg-black absolute right-12 text-white font-bold text-lg leading-normal flex items-center justify-center'>
                -20%
              </div>
              <div className='w-[97px] h-[89px] rounded-tl-3xl bg-white absolute -right-1 -bottom-0 flex justify-center items-center cursor-pointer'>
                <div className='w-[49px] h-[49px] rounded-full bg-black text-white flex justify-center items-center text-center'>
                  <span className='font-bold text-3xl'>+</span>
                </div>
              </div>
              <div className='absolute bottom-4 flex flex-col ml-5 gap-2'>
                <span className='text-[#FC8A06] text-lg font-medium leading-normal'>
                  McDonald’s East London
                </span>
                <span className='text-[white] font-bold text-3xl leading-normal'>
                  First Order Discount
                </span>
              </div>
              <Image
                src={'/resLayout/banner1.svg'}
                alt=''
                width={496}
                height={325}
              />
            </div>
            <div className='relative'>
              <div className='w-[88px] h-[66px] rounded-b-2xl bg-black absolute right-12 text-white font-bold text-lg leading-normal flex items-center justify-center'>
                -20%
              </div>
              <div className='w-[97px] h-[89px] rounded-tl-3xl bg-white absolute -right-1 -bottom-0 flex justify-center items-center cursor-pointer'>
                <div className='w-[49px] h-[49px] rounded-full bg-black text-white flex justify-center items-center text-center'>
                  <span className='font-bold text-3xl'>+</span>
                </div>
              </div>
              <div className='absolute bottom-4 flex flex-col ml-5 gap-2'>
                <span className='text-[#FC8A06] text-lg font-medium leading-normal'>
                  McDonald’s East London
                </span>
                <span className='text-[white] font-bold text-3xl leading-normal'>
                  First Order Discount
                </span>
              </div>
              <Image
                src={'/resLayout/banner1.svg'}
                alt=''
                width={496}
                height={325}
              />
            </div>
            <div className='relative'>
              <div className='w-[88px] h-[66px] rounded-b-2xl bg-black absolute right-12 text-white font-bold text-lg leading-normal flex items-center justify-center'>
                -20%
              </div>
              <div className='w-[97px] h-[89px] rounded-tl-3xl bg-white absolute -right-1 -bottom-0 flex justify-center items-center cursor-pointer'>
                <div className='w-[49px] h-[49px] rounded-full bg-black text-white flex justify-center items-center text-center'>
                  <span className='font-bold text-3xl'>+</span>
                </div>
              </div>
              <div className='absolute bottom-4 flex flex-col ml-5 gap-2'>
                <span className='text-[#FC8A06] text-lg font-medium leading-normal'>
                  McDonald’s East London
                </span>
                <span className='text-[white] font-bold text-3xl leading-normal'>
                  First Order Discount
                </span>
              </div>
              <Image
                src={'/resLayout/banner1.svg'}
                alt=''
                width={496}
                height={325}
              />
            </div>
          </div>
        </div>
      </div>
      {active === 1 || 2 ? <Burgers /> : <></>}

      {active === 4 && <Fries />}
      {active === 5 && <Cold />}
    </>
  )
}

export default Sidebar

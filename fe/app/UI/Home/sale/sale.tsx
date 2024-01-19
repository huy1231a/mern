'use client'
import { SideBarMenu } from '@/app/common/saldBar'
import Image from 'next/image'
import React from 'react'

export const data = [
  {
    img: '/sale/r28.png',
    title: 'Burgers & Fast food',
    nameRes: '21 Restaurants',
  },
  {
    img: '/sale/r27.png',
    title: 'Salads',
    nameRes: '32 Restaurants',
  },
  {
    img: '/sale/r26.png',
    title: 'Pasta & Casuals',
    nameRes: '32 Restaurants',
  },
  {
    img: '/sale/r25.png',
    title: 'Burgers & Fast food',
    nameRes: '21 Restaurants',
  },
  {
    img: '/sale/r24.png',
    title: 'Burgers & Fast food',
    nameRes: '21 Restaurants',
  },
  {
    img: '/sale/r23.png',
    title: 'Burgers & Fast food',
    nameRes: '21 Restaurants',
  },
]

export const dataRes = [
  {
    img: '/res/res1.png',
    title: 'McDonald’s London',
  },
  {
    img: '/res/res2.png',
    title: 'Papa Johns',
  },
  {
    img: '/res/res3.png',
    title: 'KFC West London',
  },
  {
    img: '/res/res4.png',
    title: 'Texas Chicken',
  },
  {
    img: '/res/res5.png',
    title: 'Burger King',
  },
  {
    img: '/res/res6.png',
    title: 'Shaurma 1',
  },
]
const Sale = () => {
  const [onClickVegan, setOnClickVegan] = React.useState(false)
  const [onClickSushi, setOnClickSushi] = React.useState(false)
  const [onClickPizza, setOnClickPizza] = React.useState(false)
  const [onClickOther, setOnClickOther] = React.useState(false)

  React.useEffect(() => {
    setOnClickPizza(true)
  }, [])

  return (
    <div className='flex justify-center mt-5'>
      <div className='w-[1528px] h-[1200px]'>
        <div className='flex justify-between items-center'>
          <span className='text-[32px] font-bold leading-normal p-5'>
            Up to -40% 🎊 Order.uk exclusive deals
          </span>
          <div className='flex gap-4 px-2 py-3 cursor-pointer'>
            <span
              className={`p-5 font-normal text-lg transition duration-300 ease-in-out hover:scale-110 ${
                onClickVegan &&
                'underline  text-[#FC8A06] flex justify-center items-center'
              }`}
              onClick={() => {
                setOnClickVegan(true),
                  setOnClickPizza(false),
                  setOnClickSushi(false),
                  setOnClickOther(false)
              }}>
              Vegan
            </span>
            <span
              className={`p-5 font-normal text-lg transition duration-300 ease-in-out hover:scale-110 ${
                onClickSushi &&
                'underline rounded-full text-[#FC8A06] flex justify-center items-center'
              }`}
              onClick={() => {
                setOnClickSushi(true),
                  setOnClickPizza(false),
                  setOnClickVegan(false),
                  setOnClickOther(false)
              }}>
              Sushi
            </span>
            <div
              className={`${
                onClickPizza && 'underline rounded-full text-[#FC8A06]'
              } flex justify-center transition duration-300 ease-in-out hover:scale-110 `}
              onClick={() => {
                setOnClickSushi(false),
                  setOnClickPizza(true),
                  setOnClickVegan(false),
                  setOnClickOther(false)
              }}>
              <span className='flex justify-center items-center font-normal text-lg'>
                Pizza & Fast food
              </span>
            </div>
            <span
              className={`p-5 font-normal text-lg transition duration-300 ease-in-out hover:scale-110 ${
                onClickOther &&
                'underline rounded-full text-[#FC8A06] flex justify-center items-center'
              }`}
              onClick={() => {
                setOnClickSushi(false),
                  setOnClickPizza(false),
                  setOnClickVegan(false),
                  setOnClickOther(true)
              }}>
              Others
            </span>
          </div>
        </div>
        {onClickPizza && (
          <div className='flex gap-4'>
            <div className='w-[496px] h-[250px]   rounded-xl relative'>
              <Image
                src={'/pho.png'}
                alt=''
                height={250}
                width={496}
                className='absolute rounded-2xl'
              />
              <div className='flex justify-end mr-5 relative'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -40%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5 relative'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5 relative'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -10%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
          </div>
        )}
        {onClickSushi && (
          <div className='flex gap-4'>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Goi Ca Muc
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Susu Thai Mong
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5 relative'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
          </div>
        )}
        {onClickVegan && (
          <div className='flex gap-4'>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Goi Ca Muc
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Susu Thai Mong
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5 relative'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Chef Burgers London
                </h1>
              </div>
            </div>
          </div>
        )}
        {onClickOther && (
          <div className='flex gap-4'>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Pho Bo
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className=' w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Banh Mi
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5 relative'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Banh Mi
                </h1>
              </div>
            </div>
            <div className='w-[496px] h-[250px] bg-slate-600 rounded-xl'>
              <div className='flex justify-end mr-5'>
                <div className='w-[88px] h-[66px] bg-black rounded-b-2xl flex text-center justify-center items-center'>
                  <span className='text-center text-white font-bold text-lg'>
                    -20%
                  </span>
                </div>
              </div>
              <div className='mt-16 p-5'>
                <span className='text-orange-500 font-semibold text-lg leading-normal'>
                  Restaurant
                </span>
                <h1 className='text-white font-bold text-2xl leading-normal'>
                  Bun Thit Nuong
                </h1>
              </div>
            </div>
          </div>
        )}
        <div className='mt-10'>
          <h1 className='text-[32px] font-bold leading-normal p-5'>
            Order.uk Popular Categories 🤩
          </h1>
          <div className='flex gap-5'>
            {data.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <SideBarMenu
                img={item.img}
                title={item.title}
                nameRes={item.nameRes}
                textColor='text-black'
                bg='bg-[#FAFAFA]'
              />
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-[32px] font-bold leading-normal p-5'>
            Popular Restaurants
          </h1>
          <div className='flex gap-5'>
            {dataRes.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <SideBarMenu
                img={item.img}
                title={item.title}
                textColor='text-white'
                bg='bg-[#FC8A06]'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale

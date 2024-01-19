import { Product, Props } from '@/app/common/product'
import Image from 'next/image'
import React from 'react'

const Cold = () => {
  const data: Props[] = [
    {
      title: 'Royal Cheese Burger with extra Fries',
      img: '/resLayout/pro2.png',
      price: '23.10',
      pro: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
    },
    {
      title: 'The classics for 3',
      img: '/resLayout/pro2.png',
      price: '23.10',
      pro: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks',
    },
    {
      title: 'Royal Cheese Burger with extra Fries',
      img: '/resLayout/pro2.png',
      price: '23.10',
      pro: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
    },
    {
      title: 'Royal Cheese Burger with extra Fries',
      img: '/resLayout/pro2.png',
      price: '23.10',
      pro: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
    },
    {
      title: 'Royal Cheese Burger with extra Fries',
      img: '/resLayout/pro2.png',
      price: '23.10',
      pro: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
    },
    {
      title: 'Royal Cheese Burger with extra Fries',
      img: '/resLayout/pro2.png',
      price: '23.10',
      pro: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
    },
  ]
  return (
    <div className='flex justify-center mt-14'>
      <div className='w-[1549px] h-auto'>
        <h1 className='text-[44px] leading-6 font-bold text-[#FC8A06]'>
          Cold Drinks
        </h1>
        <div className='grid grid-cols-3 gap-4 mt-10'>
          {data.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Product
              img={item.img}
              price={item.price}
              pro={item.pro}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cold

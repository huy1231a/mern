'use client'
import React from 'react'
import Sidebar from './ResSidebar/sidebar'
import BannerRes from './banner'
import Info from './info/info'
import Map from './ResSidebar/map/'
import CusReview from './ResSidebar/cusReviews'
import { SideBarMenu } from '@/app/common/saldBar'
import { dataRes } from '../Home/sale/sale'

const Res = () => {
  return (
    <>
      <BannerRes />
      <Sidebar />
      <Info />
      <Map />
      <CusReview />
      <div className='flex justify-center mt-5'>
        <div className='w-[1528px] h-auto'>
          <div className='mt-10 space-y-3'>
            <h1 className='text-[32px] font-bold leading-normal'>
              Similar Restaurants
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
    </>
  )
}

export default Res

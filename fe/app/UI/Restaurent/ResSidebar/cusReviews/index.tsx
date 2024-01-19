'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import './styles.css'

// import required modules
import { EffectCards } from 'swiper/modules'

const CusReview = () => {
  return (
    <div className='justify-center flex mt-10'>
      <div className='w-full h-[600px] bg-[#D9D9D9]'>
        <div className='flex justify-center p-9'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='mySwiper'>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default CusReview

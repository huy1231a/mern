import React from 'react'

const Map = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[1528px] h-auto flex-shrink-0 bg-transparent '>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.117725368073!2d106.63808007588383!3d10.80229455871433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529501e9f5d7f%3A0xa6114632f57a3a6b!2zMzY0IMSQLiBD4buZbmcgSMOyYSwgc3RyZWV0LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1705569609149!5m2!1svi!2s'
          width='1528'
          height='600'
          className='rounded-2xl shadow-lg'
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </div>
  )
}

export default Map

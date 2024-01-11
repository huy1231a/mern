import React from 'react'

const Sale = () => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='w-[1528px] h-[600px]'>
        <div className='flex justify-between items-center'>
          <span className='text-[32px] font-bold leading-normal'>
            Up to -40% 🎊 Order.uk exclusive deals
          </span>
          <div className='flex gap-4 px-2 py-3 cursor-pointer'>
            <span className='p-5'>Vegan</span>
            <span className='p-5'>Sushi</span>
            <div className='w-[219px] h-[61px] border border-[#FC8A06] rounded-full flex justify-center '>
              <span className='flex justify-center items-center text-[#FC8A06]'>
                Pizza & Fast food
              </span>
            </div>
            <span className='p-5'>Vegan</span>
            <span className='p-5'>Others</span>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[]'>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  )
}

export default Sale

import React from 'react'

const ProfileRes = () => {
  return (
    <div className='justify-center flex mt-10'>
      <div className='w-[1527px] h-[882px] flex-shrink-0 bg-[#D9D9D9] rounded-2xl'>
        <div className='flex justify-center mt-20'>
          <div className='w-[1290px] h-[700px] flex-shrink-0 bg-white'>
            <div className='flex gap-5 justify-between items-center w-full h-[120px] bg-[#D9D9D9]'>
              <div>Know more about us!</div>
              <div className='flex gap-4'>
                <span>Frequent Questions</span>
                <span> Who we are?</span>
                <span>Partner Program</span>
                <span> Help & Support</span>
              </div>
            </div>
            <div className='flex gap-4 justify-center items-center'>
              <div className='flex flex-col items-center'>
                <span>How does Order.UK work?</span>
                <span>What payment methods are accepted?</span>
                <span>Can I track my order in real-time?</span>
                <span>
                  Are there any special discounts or <br /> promotions
                  available?
                </span>
                <span>Is Order.UK available in my area?</span>
              </div>
              <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='flex gap-3 '>
                  <div className='w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl'>
                    1
                  </div>
                  <div className='w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl'>
                    2
                  </div>
                  <div className='w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl'>
                    3
                  </div>
                </div>
                <div className='flex justify-end'>
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu, select your favorite dishes, and proceed to
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileRes

import Image from 'next/image'
export interface Props {
  img: string
  title: string
  pro: string
  price: string
}

export const Product: React.FC<Props> = ({ img, title, price, pro }) => {
  return (
    <div>
      <div className='w-[496px] h-[245px] flex-shrink-0 shadow-2xl bg-[#FDFDFD] rounded-2xl'>
        <div className='flex justify-between p-5 gap-10'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-xl leading-6 font-semibold'>{title}</h1>
            <span>{pro}</span>
            <span className='text-xl leading-6 font-bold'>{`GBP${price}`}</span>
          </div>
          <div className='relative'>
            <Image src={img} alt='' width={370} height={199} className='' />
            <div className='w-[88px] h-[81px] rounded-tl-3xl bg-white absolute -right-1 -bottom-0 flex justify-center items-center cursor-pointer'>
              <div className='w-[49px] h-[49px] rounded-full bg-black text-white flex justify-center items-center text-center'>
                <span className='font-bold text-3xl'>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
interface Props {
  img: string
  title: string
  nameRes?: string
  textColor?: string
  bg?: string
}

export const SideBarMenu: React.FC<Props> = ({
  img,
  title,
  nameRes,
  textColor,
  bg,
}) => {
  return (
    <>
      <div className='flex gap-5'>
        {/* // eslint-disable-next-line react/jsx-key */}
        <div className={`w-[238px] h-auto rounded-2xl flex flex-col  ${bg}`}>
          <Image
            src={img}
            alt=''
            width={238}
            height={203}
            className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer'
          />
          <div className='flex flex-col p-4'>
            <h1 className={`font-bold text-lg leading-normal ${textColor}`}>
              {title}
            </h1>
            <span
              className={'font-normal text-sm leading-normal text-[#FC8A06]'}>
              {nameRes}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect } from 'react'

interface Erros {
  username: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const Menu = () => {
  const [bg, setBg] = React.useState(false)
  const [bg1, setBg1] = React.useState(false)
  const [bg2, setBg2] = React.useState(false)
  const [bg3, setBg3] = React.useState(false)
  const [bg4, setBg4] = React.useState(false)

  const [username, setUserName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [errors, setErrors] = React.useState<Erros>()

  console.log('username', username)
  console.log('email', email)
  console.log('password', password)
  console.log('confirmPassword', confirmPassword)
  console.log('phone', phone)

  const [isFormValid, setIsFormValid] = React.useState(false)

  const [clickLogin, setOnClickLogin] = React.useState(false)
  const [clickSingup, setOnclickSingup] = React.useState(false)

  const [showModal, setShowModal] = React.useState(false)

  const validateForm = () => {
    const errors = { username, email, phone, password, confirmPassword }
    if (!username) {
      errors.username = 'Name is required.'
    }

    if (!email) {
      errors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.'
    }

    if (!phone) {
      errors.phone = 'mail is required.'
    } else if (phone.length > 11) {
      errors.phone = 'Phone is invalid'
    }

    if (!password) {
      errors.password = 'Password is required.'
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.'
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Password is required.'
    } else if (errors.confirmPassword !== errors.password) {
      errors.password = 'Password not match'
    }

    setErrors(errors)
    setIsFormValid(Object.keys(errors).length === 0)
  }

  const hanleClickSingup = () => {
    validateForm()
  }

  const handleSubmit = useCallback(() => {
    if (isFormValid) {
      console.log('Form submitted successfully!')
    } else {
      console.log('Form has errors. Please correct them.')
    }
  }, [isFormValid])

  console.log('bg', bg)
  console.log('bg1', bg1)

  useEffect(() => {
    setBg(true)
    setOnClickLogin(true)
    // validateForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[1528px] h-auto '>
        <div className='flex justify-between items-center'>
          <Image
            src={'/logo.png'}
            alt=''
            width={215}
            height={53}
            className='cursor-pointer'
          />
          <div className='flex gap-10 items-center'>
            <div
              className={`w-[127px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg && 'bg-[#FC8A06]'
              } rounded-[120px] flex justify-center items-center ${
                bg && 'text-white font-normal text-lg leading-normal '
              }`}>
              <Link
                href={'/'}
                className='font-normal text-lg leading-normal '
                onClick={() => {
                  setBg(true)
                  setBg1(false)
                  setBg2(false)
                  setBg3(false)
                  setBg4(false)
                }}>
                Home
              </Link>
            </div>
            <div
              className={`w-[170px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg1 && 'bg-[#FC8A06]'
              } rounded-[120px] flex justify-center items-center ${
                bg1 && 'text-white font-normal text-lg leading-normal w-[170px]'
              }`}>
              <Link
                href={'/restaurents'}
                className='font-normal text-lg leading-normal'
                onClick={() => {
                  setBg1(true)
                  setBg(false)
                  setBg2(false)
                  setBg3(false)
                  setBg4(false)
                }}>
                Browse Menu
              </Link>
            </div>
            <div
              className={`w-[170px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg2 && 'bg-[#FC8A06]'
              } rounded-[120px] flex justify-center items-center ${
                bg2 &&
                'text-white font-normal text-lg leading-normal w-[170px] transition-transform '
              }`}>
              <Link
                href={'/restaurents'}
                className='font-normal text-lg leading-normal'
                onClick={() => {
                  setBg2(true)
                  setBg(false)
                  setBg1(false)
                  setBg3(false)
                  setBg4(false)
                }}>
                Special Offers
              </Link>
            </div>
            <div
              className={`w-[150px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg3 && 'bg-[#FC8A06]'
              } rounded-[120px] flex justify-center items-center ${
                bg3 && 'text-white font-normal text-lg leading-normal'
              }`}>
              <Link
                href={'/restaurents'}
                className='font-normal text-lg leading-normal'
                onClick={() => {
                  setBg3(true)
                  setBg1(false)
                  setBg2(false)
                  setBg(false)
                  setBg4(false)
                }}>
                Restaurants
              </Link>
            </div>
            <div
              className={`w-[150px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg4 && 'bg-[#FC8A06]'
              } rounded-[120px] flex justify-center items-center ${
                bg4 && 'text-white font-normal text-lg leading-normal'
              }`}>
              <Link
                href={'/restaurents'}
                className='font-normal text-lg leading-normal'
                onClick={() => {
                  setBg4(true)
                  setBg(false)
                  setBg1(false)
                  setBg2(false)
                  setBg3(false)
                }}>
                Track Order
              </Link>
            </div>
            <div className='w-[234px] h-[60px] rounded-full bg-[#03081F] flex justify-center items-center cursor-pointer'>
              <button
                className='flex items-center gap-3'
                onClick={() => {
                  setShowModal(true)
                }}>
                <Image
                  src={'/nav/user.png'}
                  alt=''
                  width={30.971}
                  height={27}
                />
                <span className='text-white'>Login/Signup</span>
              </button>
              {showModal ? (
                <>
                  <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                    <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                      {/*content*/}
                      <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        {/*header*/}
                        <div className='flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t gap-8'>
                          <button
                            className={`w-[150px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                              clickLogin && 'bg-[#FC8A06]'
                            } rounded-[120px] flex justify-center items-center ${
                              clickLogin &&
                              'text-white font-normal text-lg leading-normal'
                            }`}
                            onClick={() => {
                              setOnClickLogin(true), setOnclickSingup(false)
                            }}>
                            Login
                          </button>
                          <button
                            className={`w-[150px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                              clickSingup && 'bg-[#FC8A06]'
                            } rounded-[120px] flex justify-center items-center ${
                              clickSingup &&
                              'text-white font-normal text-lg leading-normal'
                            }`}
                            onClick={() => {
                              setOnclickSingup(true), setOnClickLogin(false)
                            }}>
                            SignUp
                          </button>
                        </div>
                        {/*body*/}
                        {clickLogin && (
                          <div className='relative flex-auto my-20 mx-20'>
                            <form
                              action=''
                              method='GET'
                              // onSubmit={handleSubmit}
                            >
                              <div className='flex flex-col gap-4'>
                                <div className='flex gap-3 justify-center items-center my-2 mx-3'>
                                  <span className=' text-base font-semibold leading-normal'>
                                    Username
                                  </span>
                                  <input
                                    type='text'
                                    name=''
                                    id=''
                                    placeholder='username'
                                    className='w-56 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  />
                                </div>
                                <div className='w-full flex gap-3 justify-center items-center'>
                                  <span className=' text-base font-semibold leading-normal'>
                                    Password
                                  </span>

                                  <input
                                    type='password'
                                    name=''
                                    id=''
                                    placeholder='*********'
                                    className='w-56 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  />
                                </div>
                                <span className='text-red-500 hover:underline cursor-pointer text-base font-semibold leading-normal flex justify-end'>
                                  Forget Password
                                </span>
                                <button
                                  className='bg-[#FC8A06] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-5'
                                  type='button'>
                                  Login
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                        {clickSingup && (
                          <div className='relative my-20 mx-40'>
                            <form
                              className='flex max-w-md flex-col gap-4'
                              action={handleSubmit}
                              method='GET'>
                              <div className='flex flex-col gap-3'>
                                <span className=' text-base font-semibold leading-normal'>
                                  Email
                                </span>
                                <input
                                  type='email'
                                  name='email'
                                  id='email'
                                  placeholder='your@gmail.com'
                                  className='w-72 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  onChange={(e) => {
                                    setEmail(e.target.value)
                                  }}
                                />
                                {errors?.email && (
                                  <p className='text-red-500 font-normal text-sm mt-2'>
                                    {errors.email}
                                  </p>
                                )}
                              </div>
                              <div className='flex flex-col gap-3'>
                                <span className=' text-base font-semibold leading-normal'>
                                  Phone
                                </span>
                                <input
                                  type='phone'
                                  name='phone'
                                  id='phone'
                                  placeholder='+84 ......'
                                  className='w-72 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  onChange={(e) => {
                                    setPhone(e.target.value)
                                  }}
                                />
                                {errors?.phone && (
                                  <p className='text-red-500 font-normal text-sm mt-2'>
                                    {errors.phone}
                                  </p>
                                )}
                              </div>
                              <div className='flex flex-col gap-3'>
                                <span className=' text-base font-semibold leading-normal'>
                                  Username
                                </span>
                                {errors?.username && (
                                  <p className='text-red-500 font-normal text-sm mt-2'>
                                    {errors.username}
                                  </p>
                                )}
                                <input
                                  type='text'
                                  name='username'
                                  id='username'
                                  placeholder=''
                                  className='w-72 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  onChange={(e) => {
                                    setUserName(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='flex flex-col gap-3'>
                                <span className=' text-base font-semibold leading-normal'>
                                  Password
                                </span>
                                <input
                                  type='password'
                                  name='password'
                                  id='password'
                                  placeholder='*********'
                                  className='w-72 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  onChange={(e) => {
                                    setPassword(e.target.value)
                                  }}
                                />
                                {errors?.password && (
                                  <p className='text-red-500 font-normal text-sm mt-2'>
                                    {errors.password}
                                  </p>
                                )}
                              </div>
                              <div className='flex flex-col gap-3'>
                                <span className=' text-base font-semibold leading-normal'>
                                  Confirm Password
                                </span>
                                <input
                                  type='password'
                                  name=''
                                  id=''
                                  placeholder='*********'
                                  className='w-72 h-5 border border-slate-300 rounded-lg p-5 outline-none shadow-lg'
                                  onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                  }}
                                />
                                {errors?.confirmPassword && (
                                  <p className='text-red-500 font-normal text-sm mt-2'>
                                    {errors.confirmPassword}
                                  </p>
                                )}
                              </div>
                              <button
                                className={`  bg-[#FC8A06] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-5`}
                                type='submit'
                                onClick={hanleClickSingup}>
                                Signup
                              </button>
                            </form>
                          </div>
                        )}
                        {/*footer*/}
                        <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                          <button
                            className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                            type='button'
                            onClick={() => setShowModal(false)}>
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

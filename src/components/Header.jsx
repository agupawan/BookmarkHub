import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section className='bg-sky-100 sticky top-0 left-0 right-0 z-50 shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]'>
       <header className="container mx-auto flex justify-between py-3 items-center">
        <div className='flex items-center'>
          <img src={images.Logo} className='object-contain h-12' alt="logo" />
          {/* <h1 className='font-serif font-bold text-blue-500 text-xl'>Bookmark Hub</h1> */}
        </div>
        <div className="flex items-center">
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  )
}

export default Header

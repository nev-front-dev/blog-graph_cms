import React from 'react'
import Header from '../header'

export default function Layout({ children }) {
  return (
    <>
      <div className='mx-auto px-5 2xl:px-[200px] md:px-10 bg-blue-900 min-h-screen'>
      <Header />
      {children}
      </div>
    </>
  )
}

import React from 'react'

export default function index({ pw }) {
  return (
    <div className="border-2 rounded-lg bg-slate-500 p-5 mt-5 relative hover:scale-150 hover:z-10 hover:cursor-pointer hover:transition-all delay-100">
      <div className='absolute contents'>
      <h2>{pw.title}</h2>
      <p>{pw.slug}</p>
      </div>
    </div>
  )
}

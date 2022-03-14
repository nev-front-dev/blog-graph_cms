import React from 'react'

export default function index({ post }) {
  return (
    <div key={index} className="flex p-3">
      <p className="mr-5">{post.title}</p>
      <p className="">{post.excerpt}</p>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="flex w-full items-center justify-between rounded-md bg-gray-50 p-3 sticky top-0 z-20">
      <p className="text-2xl font-semibold text-orange-600">NEV_BLOG</p>
      <ul className="flex justify-between gap-5">
        <Link href="/">
          <a>
            <li>Web Developer</li>
          </a>
        </Link>
        <li>React</li>
      </ul>
    </header>
  )
}

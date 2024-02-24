'use client'

import { CartWidget } from './cart-widget'
import Image from 'next/image'
import Link from 'next/link'
import { InputSearch } from './input'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          DevStore
        </Link>

        <InputSearch />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/Gustavosouza2.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="Image Account"
          />
        </Link>
      </div>
    </div>
  )
}

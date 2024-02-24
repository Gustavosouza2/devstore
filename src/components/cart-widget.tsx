'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'

export const CartWidget = () => {
  const { items } = useCart()
  return (
    <>
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-4 w-4" />
        <span className="text-sm">Cart ({items.length})</span>
      </div>

      <div className="w-px h-4 bg-zinc-700" />
    </>
  )
}

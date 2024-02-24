'use client'

import { useCart } from '@/context/cart-context'

export interface AddToCartProps {
  productId: number
}

export const ButtonAddToCart = ({ productId }: AddToCartProps) => {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold"
      onClick={handleAddProductToCart}
    >
      Adicionar Item ao carrinho
    </button>
  )
}

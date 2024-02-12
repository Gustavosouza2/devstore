import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextProps {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartTtem, setCartItem] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCartItem((state) => {
      const product = state.some((product) => product.productId === productId)

      if (product) {
        return state.map((item) => {
          return { ...item, quantity: item.quantity + 1 }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartTtem, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

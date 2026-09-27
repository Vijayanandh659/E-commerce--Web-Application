import React, { createContext, useContext, useState, useCallback } from 'react'
import api from '../api/axios'
import { useAuth } from './AuthContext'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const { isAuthenticated } = useAuth()

  const fetchCart = useCallback(async () => {
    if (!isAuthenticated) {
      setCartItems([])
      return
    }
    const { data } = await api.get('/cart')
    setCartItems(data)
  }, [isAuthenticated])

  const addToCart = async (productId, quantity = 1) => {
    await api.post('/cart', { productId, quantity })
    await fetchCart()
  }

  const updateQuantity = async (cartItemId, quantity) => {
    await api.put(`/cart/${cartItemId}`, { quantity })
    await fetchCart()
  }

  const removeFromCart = async (cartItemId) => {
    await api.delete(`/cart/${cartItemId}`)
    await fetchCart()
  }

  const clearLocalCart = () => setCartItems([])

  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, fetchCart, addToCart, updateQuantity, removeFromCart, clearLocalCart, cartTotal, cartCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

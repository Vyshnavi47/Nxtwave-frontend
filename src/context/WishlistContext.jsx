import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext()

export function useWishlist() {
  return useContext(WishlistContext)
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist))
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
    }
  }, [wishlistItems, loading])

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems
      } else {
        return [...prevItems, product]
      }
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  const clearWishlist = () => {
    setWishlistItems([])
  }

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    loading,
  }

  return <WishlistContext.Provider value={value}>{!loading && children}</WishlistContext.Provider>
}

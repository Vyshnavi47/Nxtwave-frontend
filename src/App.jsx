import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ShopPage from "./pages/ShopPage"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import "./App.css"



function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="app">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<ShopPage products={products} loading={loading} error={error} />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App

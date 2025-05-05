import { useState, useEffect } from "react"
import { useParams, Link ,useNavigate} from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import "./ProductPage.css"

const ProductPage = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [relatedProducts, setRelatedProducts] = useState([])

  const nav = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
          throw new Error("Product not found")
        }
        const data = await response.json()
        setProduct(data)
        setIsWishlisted(isInWishlist(data.id))

        // Fetch related products
        const relatedResponse = await fetch(`https://fakestoreapi.com/products/category/${data.category}`)
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json()
          setRelatedProducts(relatedData.filter((p) => p.id !== data.id).slice(0, 4))
        }

        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id, isInWishlist])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    setQuantity(value)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    alert("Product added to cart!")
  }

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
    setIsWishlisted(!isWishlisted)
  }

  if (loading) return <div className="loading">Loading product...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (!product) return <div className="error">Product not found</div>

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-breadcrumb">
          <Link to="/">Home</Link> / <span >Shop</span> / <span>{product.title}</span>
        </div>

        <div className="product-details">
          <div className="product-gallery">
            <div className="product-main-image">
              <img src={product.image } alt={product.title} />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>

            <div className="product-price">${product.price.toFixed(2)}</div>

            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.round(product.rating.rate) ? "filled" : ""}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-count">({product.rating.count} reviews)</span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity</label>
                <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="action-buttons">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className={`wishlist-btn ${isWishlisted ? "active" : ""}`} onClick={toggleWishlist}>
                  {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
              </div>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">SKU:</span>
                <span className="meta-value">SKU-{product.id}</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Related Products</h2>
            <div className="related-grid">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="related-product">
                  <span onClick={()=>nav(`/product/${relatedProduct.id}`)}>
                    <div className="related-image">
                      <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.title} />
                    </div>
                    <h3>{relatedProduct.title}</h3>
                    <div className="related-price">${relatedProduct.price.toFixed(2)}</div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage

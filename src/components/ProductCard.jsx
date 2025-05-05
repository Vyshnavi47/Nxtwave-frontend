import { Link ,useNavigate} from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useWishlist } from "../context/WishlistContext"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const { user } = useAuth()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id))
  const navigate = useNavigate();

  const toggleWishlist = (e) => {
    e.preventDefault()
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="product-card">
      <span  className="product-link">
        <div className="product-image" onClick={()=>{
          if(user){
            navigate(`/product/${product.id}`)
          }
          else{
            navigate('/login')
          }
        }}>
          <img src={product.image } alt={product.title} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.title}</h3>
          <p className="product-price">
            {user ? `$${product.price.toFixed(2)}` : "Sign in or create an account to see pricing"}
          </p>
        </div>
      </span>
      <button
        className={`wishlist-button ${isWishlisted ? "active" : ""}`}
        onClick={toggleWishlist}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
      </button>
    </div>
  )
}

export default ProductCard

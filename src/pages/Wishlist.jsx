import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom"; 
import "./wishlist.css"

function Wishlist() {
  const { wishlistItems, removeFromWishlist, clearWishlist, loading } = useWishlist();

  if (loading) return <p className="loading">Loading wishlist...</p>;

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty.</p>
          <Link to="/" className="continue-shopping">← Continue Shopping</Link>
        </div>
      ) : (
        <>
          <ul className="wishlist-list">
            {wishlistItems.map((item) => (
              <li key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} className="wishlist-item-image" />
                <div className="wishlist-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="wishlist-item-actions">
                    <button onClick={() => removeFromWishlist(item.id)} className="remove-button">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="wishlist-summary">
            <button onClick={clearWishlist} className="clear-button">Clear Wishlist</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Wishlist;

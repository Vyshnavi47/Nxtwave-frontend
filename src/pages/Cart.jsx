import React from "react";
import { useCart } from "../context/CartContext"; 
import { Link } from "react-router-dom"; 
import "./cart.css"; 

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getItemCount,
    loading,
  } = useCart();

  if (loading) return <p className="loading">Loading cart...</p>;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="continue-shopping">← Continue Shopping</Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <label>
                    Quantity:{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      className="cart-quantity-input"
                    />
                  </label>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>Total Items: {getItemCount()}</p>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
            <button onClick={clearCart} className="clear-button">Clear Cart</button>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

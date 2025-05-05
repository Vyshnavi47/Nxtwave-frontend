import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <p>
              <LuLayoutDashboard />
              Lorem ipsum dolor
            </p>
            <p className="hide">
              <LuLayoutDashboard />
              Lorem ipsum dolor
            </p>
            <p className="hide">
              <LuLayoutDashboard />
              Lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container main-header-container">
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <RxHamburgerMenu size={20} />
            </button>
          <div className="logo-container">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <img src="./Logo.png" alt="Logo" />
              </div>
            </Link>
          </div>

          <h1>LOGO</h1>

          <div className="header-actions">
            <CiSearch size={20} />

            <Link to="/wishlist">
              <IoHeartOutline size={20} />
              {wishlistItems.length > 0 && (
                <span className="wishlist-count">{wishlistItems.length}</span>
              )}
            </Link>
            <Link to="/cart">
              <BsHandbag size={20} />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Link>
            {user ? (
              <div className="user-menu">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z"></path>
                </svg>
                <div className="user-dropdown">
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <CiUser size={20} />
              </Link>
            )}
            <div className="language-selector">
              <select>
                <option value="en">ENG</option>
                <option value="fr">FRA</option>
                <option value="es">ESP</option>
              </select>
            </div>
           
          </div>
        </div>

        <div className="main-nav-container">
          <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="close-icon" onClick={()=>{setMobileMenuOpen(false);}}>
                <IoIosCloseCircle size={40} />
              </div>
            <ul className="nav-links">             
              <li>
                <Link to="/">SHOP</Link>
              </li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

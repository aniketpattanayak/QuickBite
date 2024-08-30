import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../public/images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)


  return (
    <>
      <div id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div>
          <img src={logo} alt="logo" id="logo" />
        </div>
        <div id="menu">
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/restaurant" className="link">Restaurant</Link>
            </li>
            <li>
              <Link to="/blogs" className="link">Blogs</Link>
            </li>
            <li>
              <Link to="/" className="link">Gallery</Link>
            </li>
            <li>
              <Link to={"/cart"} id='link-cart'>
              <i className="ri-weight-line" id="cart-line1">
                <div id="cart-num">{cartItems.length}</div>
              </i>
              </Link>
            </li>
          </ul>
        </div>
        <div id="download">Download App</div>
      </div>
    </>
  );
};

export default NavBar;

import { Link } from "react-router";
import { useAuth } from "../authContext";
import { useEffect, useState } from "react";
const Navbar = () => {
  const {isAuthenticated,logout,cartCount} = useAuth();
  const [cartTotalCount,setCartTotalCount] = useState(0);
   useEffect(()=>{
      cartCount().then((response)=>{
        setCartTotalCount(response);
      })
   },[]);
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Furni<span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/blogs">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              {!isAuthenticated && 
              <li>
                <Link className="nav-link" to="/" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                  <img src="images/user.svg" alt=""/>
                </Link>
              </li>
              }
              {isAuthenticated && 
              <li>
                <Link className="nav-link" to="#" onClick={logout}>
                <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
              </li>
               }
              <li>
                <Link className="nav-link" to="/cart">
                  <img src="images/cart.svg" alt=""/><span>{cartTotalCount}</span>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

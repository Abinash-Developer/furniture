import { NavLink,useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    return (<>
        <nav
            className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
            arial-label="Furni navigation bar"
        >
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    Furni<span>.</span>
                </a>
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
                        <li className={location.pathname === '/' ? "nav-item active" : "nav-item"}>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/shop' ? "nav-item active" : "nav-item"}>
                            <NavLink className="nav-link" to="/shop">
                                Shop
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/about' ? "nav-item active" : "nav-item"}>
                            <NavLink className="nav-link" to="/about">
                                About us
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/services' ? "nav-item active" : "nav-item"}>
                            <NavLink className="nav-link" to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/blog' ? "nav-item active" : "nav-item"}>
                            <NavLink className="nav-link" to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/contact' ? "nav-item active" : "nav-item"}>
                            <NavLink className="nav-link" to="/contact">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li>
                            <NavLink className="nav-link" to="/login">
                                <img src="images/user.svg" />
                            </NavLink>
                        </li>
                        <li>
                            <a className="nav-link" href="cart.html">
                                <img src="images/cart.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>);
}
export default Navbar;
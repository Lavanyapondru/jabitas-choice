
import { useState, useEffect } from "react";
import {
  NavLink,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useShop } from "../context/ShopContext";
import logo from "../assets/jabitaslogo.avif";
const links = [
  ["/", "Home"],
  ["/clothing", "Clothing"],
  ["/women-products", "Women Products"],
  ["/innerwear", "Inner Wear"],
  ["/skincare", "Skincare"],
  ["/dress-materials", "Dress Materials"],
  ["/stitching", "Stitching"],
  ["/gallery", "Gallery"],
  ["/about", "About Us"],
  ["/contact", "Contact"],
];

const categories = [
  ["all", "All Categories"],
  ["clothing", "Clothing"],
  ["women-products", "Women Products"],
  ["innerwear", "Inner Wear"],
  ["skincare", "Skincare"],
  ["dress-materials", "Dress Materials"],
];

const prices = [
  ["all", "Any Price"],
  ["0-499", "Under ₹500"],
  ["500-999", "₹500–₹999"],
  ["1000-1999", "₹1,000–₹1,999"],
  ["2000+", "₹2,000 & Above"],
];

export default function Navbar() {
  const {
    wishlistCount,
    cartCount,
    setIsWishlistOpen,
    setIsCartOpen,
    user,
    adminUser,
    openAuth,
    setIsProfileOpen,
  } = useShop();

  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const [search, setSearch] = useState(
    params.get("search") || ""
  );

  const [category, setCategory] = useState(
    params.get("category") || "all"
  );

  const [price, setPrice] = useState(
    params.get("price") || "all"
  );

  // Keep search fields synchronized with URL changes.
  useEffect(() => {
    const currentParams = new URLSearchParams(location.search);

    setSearch(currentParams.get("search") || "");
    setCategory(currentParams.get("category") || "all");
    setPrice(currentParams.get("price") || "all");
  }, [location.search, location.pathname]);

  const closeMobileMenu = () => {
    const nav = document.getElementById("nav");

    if (nav?.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  const handleProfileClick = () => {
    closeMobileMenu();

    if (user) {
      setIsProfileOpen(true);
    } else {
      openAuth("login");
    }
  };

  const handleWishlistClick = () => {
    closeMobileMenu();
    setIsWishlistOpen(true);
  };

  const handleCartClick = () => {
    closeMobileMenu();
    setIsCartOpen(true);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const nextParams = new URLSearchParams();

    if (search.trim()) {
      nextParams.set("search", search.trim());
    }

    if (category !== "all") {
      nextParams.set("category", category);
    }

    if (price !== "all") {
      nextParams.set("price", price);
    }

    const targetPath =
      category !== "all"
        ? `/${category}`
        : location.pathname;

    const queryString = nextParams.toString();

    navigate(
      `${targetPath}${queryString ? `?${queryString}` : ""}`
    );

    closeMobileMenu();
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setPrice("all");
    navigate(location.pathname);
    closeMobileMenu();
  };

  const renderWishlist = () => (
    <button
      type="button"
      className="nav-action-btn position-relative"
      onClick={handleWishlistClick}
      aria-label="Open wishlist"
      title="Wishlist"
    >
      <i
        className={`bi ${
          wishlistCount > 0
            ? "bi-heart-fill text-danger"
            : "bi-heart"
        }`}
      />

      {wishlistCount > 0 && (
        <span className="nav-action-badge">
          {wishlistCount}
        </span>
      )}
    </button>
  );

  const renderCart = () => (
    <button
      type="button"
      className="nav-action-btn position-relative"
      onClick={handleCartClick}
      aria-label="Open shopping bag"
      title="Shopping Bag"
    >
      <i className="bi bi-bag" />

      {cartCount > 0 && (
        <span className="nav-action-badge">
          {cartCount}
        </span>
      )}
    </button>
  );

  const renderProfile = () => (
    <button
      type="button"
      className={`nav-profile-btn ${user ? "is-user" : ""}`}
      onClick={handleProfileClick}
      title={user ? "My Profile & Orders" : "Sign In"}
    >
      {user ? (
        <>
          <span className="avatar-chip">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </span>

          <span className="nav-user-name">
            {user.name?.split(" ")[0] || "Account"}
          </span>

          <i className="bi bi-chevron-down profile-chevron" />
        </>
      ) : (
        <>
          <i className="bi bi-person" />
          <span>Sign In</span>
        </>
      )}
    </button>
  );

  return (
   
<header className="lvs-header">
  <nav className="navbar navbar-expand-lg site-nav">
    <div className="container lvs-navbar-container">

      {/* TOP BAR */}
      <div className="navbar-topbar">

        {/* LEFT: ADDRESS */}
        <div className="navbar-address">
          <i className="bi bi-geo-alt-fill" />
          <span>
            123 Fashion Street, Hyderabad, Telangana
          </span>
        </div>

        {/* RIGHT: ACCOUNT ACTIONS */}
        <div className="navbar-topbar-actions">

          <Link
            to="/admin/dashboard"
            className="topbar-admin-btn"
            title="Admin Dashboard"
          >
            <i className="bi bi-shield-lock" />
            <span>Admin</span>
            {adminUser && (
              <span className="admin-status-dot" />
            )}
          </Link>

          {renderWishlist()}
          {renderCart()}
          {renderProfile()}

        </div>
      </div>


      {/* MAIN NAVBAR ROW */}
      <div className="navbar-top-row">

        {/* LEFT: CUSTOMIZED SAREES WHATSAPP */}
        <div className="navbar-whatsapp-section">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20am%20interested%20in%20customized%20sarees."
            target="_blank"
            rel="noopener noreferrer"
            className="custom-saree-btn"
          >
            <i className="bi bi-whatsapp" />
            <span>
              Customized Sarees
              <small>WhatsApp Us</small>
            </span>
            <i className="bi bi-arrow-up-right" />
          </a>

          <Link
    to="/clothing"
    className="custom-saree-btn sale-offer-btn"
  >
    <span className="sale-icon">
      <i className="bi bi-tag-fill"></i>
    </span>

    <span className="sale-content">
      <strong>UP TO 50% OFF</strong>
      <small>Shop Now & Save More</small>
    </span>

    <i className="bi bi-arrow-right-circle-fill sale-arrow"></i>
  </Link>
        </div>


        {/* CENTER: LOGO */}
        <Link
          className="navbar-brand brand"
          to="/"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Jabita's Choice"
          />
        </Link>


        {/* RIGHT: DESKTOP SEARCH */}
        <form
          className="navbar-search-form"
          onSubmit={handleSearch}
        >
          <div className="navbar-search-box">

            <i className="bi bi-search search-icon" />

            <input
              type="search"
              className="navbar-search-input"
              placeholder="Search sarees, clothing, skincare..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search products"
            />

            <select
              className="navbar-filter-select"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              aria-label="Filter by category"
            >
              {categories.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="navbar-search-submit"
            >
              Search
            </button>

          </div>
        </form>


        {/* MOBILE MENU BUTTON */}
        <div className="navbar-mobile-actions">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" />
          </button>
        </div>

      </div>


      {/* MOBILE SEARCH */}
      <form
        className="navbar-mobile-search"
        onSubmit={handleSearch}
      >
        <div className="mobile-search-row">
          <i className="bi bi-search" />

          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <button type="submit" aria-label="Search">
            <i className="bi bi-arrow-right" />
          </button>
        </div>

        <div className="mobile-filter-row">
          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            {categories.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>

          <select
            value={price}
            onChange={(event) =>
              setPrice(event.target.value)
            }
          >
            {prices.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="mobile-filter-clear"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>
      </form>


      {/* NAVIGATION LINKS */}
      <div className="collapse navbar-collapse" id="nav">

        <ul className="navbar-nav lvs-nav-links">
          {links.map(([to, label]) => (
            <li className="nav-item" key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>


        {/* MOBILE ACCOUNT SECTION */}
        <div className="mobile-account-section">

          {user ? (
            <div className="mobile-account-card">
              <div className="d-flex align-items-center gap-2">
                <span className="avatar-chip">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </span>

                <div className="mobile-account-details">
                  <strong>{user.name || "My Account"}</strong>
                  <small>{user.email}</small>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-brand btn-sm rounded-pill"
                onClick={handleProfileClick}
              >
                My Account
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-brand rounded-pill w-100"
              onClick={handleProfileClick}
            >
              <i className="bi bi-person me-2" />
              Sign In / Create Account
            </button>
          )}

          <div className="mt-3 pt-3 border-top">
            <Link
              to="/admin/dashboard"
              className="btn btn-outline-brand rounded-pill w-100 btn-sm"
              onClick={closeMobileMenu}
            >
              <i className="bi bi-shield-lock me-2" />
              Admin Dashboard Portal
            </Link>
          </div>

        </div>
      </div>

    </div>
  </nav>
</header>

  );
}

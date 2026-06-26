import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import logo from "../assets/amazon-logo.png";
import { useNavigate } from "react-router-dom";

function Navbar({ cart, search, setSearch }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Amazon Logo" />
      </div>

      <div className="nav-location">
        <LocationOnOutlinedIcon />
        <div>
          <p>Deliver to</p>
          <h4>India</h4>
        </div>
      </div>

      <div className="search-bar">
        <select className="search-category">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon.in"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>
          <SearchIcon />
        </button>
      </div>

      <div className="nav-language">
        <p>EN</p>
      </div>

      <div className="nav-account">
        <p>Hello, Sign in</p>
        <h4>Account & Lists</h4>
      </div>

      <div className="nav-orders">
        <p>Returns</p>
        <h4>& Orders</h4>
      </div>

      <div
        className="nav-cart"
        onClick={() => navigate("/cart")}
      >
        <ShoppingCartOutlinedIcon />
        <h3>Cart</h3>
        <span className="cart-count">{cart.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
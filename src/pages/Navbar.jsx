import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.avif';
import Cart from '../assets/cart.jpg';
function Navbar(){
    var navigate = useNavigate();
    function home(){
        navigate='/';
    }
    function info(){
        navigate='info';
    }
    function products(){
        navigate='products';
    }
    function form(){
        navigate='form';
    }
    function contact(){
        navigate='contact';
    }
    function things(){
        navigate='things';
    }
    function social(){
        navigate='socials';
    }
    function cart(){
        navigate='cart';
    }
    return(
        <div className="navbar">
      <button onClick={() => navigate("/")} className="logo-btn">
        <img src={Logo} alt="Amoly Logo" className="logo" />
      </button>
      <div className="nav-links">
        <button onClick={() => navigate("/about")}>ABOUT US</button>
        <button onClick={() => navigate("/products")}>PRODUCTS</button>
        <button onClick={() => navigate("/queries")}>QUERIES</button>
        <button onClick={() => navigate("/contact")}>CONTACT US</button>
        <button onClick={() => navigate("/ingredients")}>INGREDIENTS</button>
        <button onClick={() => navigate("/engage")}>ENGAGE</button>
      </div>
      <button onClick={() => navigate("/cart")} className="cart-btn">
        <img src={Cart} alt="Cart" className="cart" />
      </button>
    </div>
    );
}
export default Navbar
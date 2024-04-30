import { Link, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { MobileHandlerContext } from "../../utils/mobileHandler";

const Navbar = () => {
  const { isMobile, openMenu, setopenMenu } = useContext(MobileHandlerContext)
 
  return (
   <nav className="navbar">
    <div className="container">
      <div className="logo">
        <img src="src/assets/images/logo.png" alt="logo" />
      </div>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
      <div className="nav--icons">
        <Link to={"/wishList"} className="nav--icon">
          <span>0</span>
        <FaHeart />
        </Link>
        <Link to={"/cart"} className="nav--icon">
          <span>0</span>
        <IoCartOutline />
        </Link>
      </div>
      {/* menu-open */}
      {isMobile && ( <div className={`nav--barIcon ${openMenu && "menu-open"}`}  onClick={()=> setopenMenu(!openMenu)}>
          <div></div>
          <div></div>
        </div>)}
    </div>
   </nav>
  );
};

export default Navbar;

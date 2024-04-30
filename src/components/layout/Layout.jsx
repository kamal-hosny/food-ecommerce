import MobileMenu from "../../components/mobileMenu/MobileMenu";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <>
    <MobileMenu />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
};

export default Layout;

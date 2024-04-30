import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import WishList from "./pages/wishList/WishList";
import Cart from "./pages/cart/Cart";
import {  MobileHandlerProvider } from "./utils/mobileHandler";
import LoadingPage from "./components/loader/LoadingPage";
import { useEffect } from "react";
import { useState } from "react";
import Error from "./pages/error/Error";
import ProductDetails from "./pages/productDetails/ProductDetails";


const App = () => {
  const [isLoading ,setIsLoading] = useState(false)
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/contact", element: <Contact /> },
        { path: "/wishList", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
        { path: "/shop/:slug", element: <ProductDetails /> },
        { path: "/*", element: <Error /> },
      ],
    },
  ]);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])


  return (
    <>
      <MobileHandlerProvider>
        {isLoading ? (<LoadingPage />) : (<RouterProvider router={Routing} />)}
      </MobileHandlerProvider>
    </>
  );
};

export default App;

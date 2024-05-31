import MostSelling from "../../components/mostSelling/MostSelling";
import Banner from "../../components/banner/Banner";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../reduxToolkit/slices/GetAllProducts";

const Home = () => {
  const { productData, isLoading, errors } = useSelector((state)=> state.products)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <>
     <div>
     <Banner />
     <MostSelling productData={productData} />
     <Video />
     </div>
    </>
  );
};

export default Home;

import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import FilterCategoryItem from "../../components/filterCategoryItem/FilterCategoryItem";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fillterCategories, getAllCategories } from "../../reduxToolkit/slices/GetAllProducts";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

const Shop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState("Burgers");

  const { allCategories, filterCategoryItems } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(fillterCategories(activeTitle));
  }, [dispatch, activeTitle]);

  return (
    <>
      <Helmet>
        <title>Food | Shop</title>
      </Helmet>
      <main className="shop">
        <BreadCrumbs />
        <HeadLines subtitle={"Shop by Category"} title={"Shop by category"} />
        <div className="filter--category">
          <Swiper onClick={(e) => {
            setActiveIndex(e.clickedIndex);
            setActiveTitle(allCategories?.data[e.clickedIndex]?.attributes?.title)
          }}
          slidesPerView={"auto"}
          spaceBetween={40}
          enabled={true}
          centeredSlides={false}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
              centeredSlides: true,
            },
          }}>
            {allCategories?.data?.map((data, _id) => (
              <SwiperSlide key={_id}>
                <FilterCategoryItem categoryData={data?.attributes}  activeIndex={activeIndex} _id={_id} />
              </SwiperSlide>
             ))}
          </Swiper>
        </div>
        
        <div className="shop--items">
          {filterCategoryItems?.data?.map((data, _id) =>
            data?.attributes.products?.data?.map((data, _id) => (
              <Card productData={data?.attributes} key={_id} />
            ))
          )}

        </div>
      </main>
    </>
  );
};

export default Shop;

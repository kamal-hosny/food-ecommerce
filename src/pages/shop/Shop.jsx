import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import FilterCategoryItem from "../../components/filterCategoryItem/FilterCategoryItem";
import Card from "../../components/card/Card";

const Shop = () => {

  
  return (
    <main className="shop">
      <BreadCrumbs />
      <HeadLines subtitle={"Shop by Category"} title={"Shop by category"} />
      <div className="filter--category">
        <FilterCategoryItem />
      </div>
      <div className="shop--items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Shop;

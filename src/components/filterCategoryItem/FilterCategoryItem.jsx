import { useState } from "react";


const FilterCategoryItem = () => {
  const [activeFillter, setActiveFillter] = useState(false)
  return (
   <div className={`filterCategory--container ${activeFillter && "active"}`} onClick={() => setActiveFillter(true)}>
    <div className="filter--image">
      <img src="src\assets\images\Hero-Banner.jpg" alt="aa" />
    </div>
    <span>Lorem, ipsum dolor.</span>
   </div>
  );
};

export default FilterCategoryItem;

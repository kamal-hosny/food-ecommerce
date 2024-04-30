import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <section className="breadCrumb">
      <div className="breadCrumb--text">
        <Link to={"/"}>Home -</Link>
        <span className="page">{pathname.slice(1)}</span>
      </div>
    </section>
  )
};

export default BreadCrumbs;

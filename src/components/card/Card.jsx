import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL.slice(0, -4);

const Card = ({ productData }) => {
  return (
  <>
  <div className="card">
  {productData?.feature && (
        <div className="newBadge">
          <span>New</span>
        </div>
  )}
    <div className="image">
      <img src={apiUrl + productData?.image?.data[0]?.attributes?.url} alt="product-img" />
    </div>
    <div className="card--price">
      <div className="price">
        <span>{productData.price} EG</span>
      </div>
      {productData?.rate && (
        <div className="rate">
        <FaStar />
        <span>{productData?.rate}</span>
      </div>
      )}
      
    </div>
    <div className="card--title">
      <Link to={`/shop/${productData?.slug}`}>{productData.name}</Link>
    </div>
    <div className="card--option">
      {productData?.pieces && (
        <div className="option">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#D62828" />
                <path
                  d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
                  fill="#D62828"
                />
              </svg>
        <span>{productData?.pieces} Pieces </span>
        </div>
      )}
       {productData?.type && (
        <div className="option">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#D62828" />
                <path
                  d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
                  fill="#D62828"
                />
              </svg>
        <span>{productData?.type}</span>
        </div>
       )}
    </div>
    <div className="card--btn">
      <button>Ass To Cart</button>
    </div>
  </div>
  </>
  );
};

export default Card;

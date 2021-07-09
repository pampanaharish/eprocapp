import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2 text-start">
      <div>
        <Link className="txtdec" to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating
            initialRating={product.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly="true"
          />
          <h1>Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}

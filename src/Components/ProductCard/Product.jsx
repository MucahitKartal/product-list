import React from "react";
import "./Product.scss";
import { products } from "../../helper/data";

const Product = () => {
  return (
    <div className="container">
      {products.map((item, index) => (
        <div key={index} className="card">
          <div className="card-over">
            <p className="title">{item.title}</p>
          </div>
          <div className="price">
            <h1>{item.price} $</h1>
          </div>
          <img src={item.image} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Product;

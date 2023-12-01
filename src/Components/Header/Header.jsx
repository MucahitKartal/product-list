import React from "react";
import "./Header.scss";
import { categories } from "../../helper/data";

const Header = () => {
  return (
    <header className="header">
      <h2 className="title">Product List</h2>
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

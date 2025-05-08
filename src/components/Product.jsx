import { useState, useContext } from "react";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

import ProductContext from "./ProductContext";

function Product() {
  const { list, sumTotal } = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <Card />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;

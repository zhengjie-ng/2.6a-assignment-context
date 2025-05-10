import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  return (
    <div className={styles.container}>
      <Card />
      <ViewList />
    </div>
  );
}
export default Product;

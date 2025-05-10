import styles from "./ViewList.module.css";
import { useContext } from "react";

import ProductContext from "../context/ProductContext";

function ViewList() {
  const { list, sumTotal, originalSumTotal } = useContext(ProductContext);
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
            <th>Total $</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>
                <div className={styles.colTotal}>
                  <span>{item.total.toFixed(2)}</span>
                  {item.total !== item.originalTotal && (
                    <span className={styles.originalTotal}>
                      {Number(item.originalTotal).toFixed(2)}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerSum}>
        Total sum: <span className={styles.sum}>{sumTotal.toFixed(2)}</span>
        <br></br>
        {sumTotal !== originalSumTotal && (
          <span className={styles.originalSumTotal}>
            {Number(originalSumTotal).toFixed(2)}
          </span>
        )}
        {originalSumTotal - sumTotal > 0 && (
          <p className={styles.deals}>
            Saving from Deals: ${Number(originalSumTotal - sumTotal).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
export default ViewList;

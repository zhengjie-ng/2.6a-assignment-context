import { createContext, useState } from "react";
const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };

  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };

  const handlerChangePrice = (value) => {
    setPrice(value);
  };

  const handlerAddProduct = () => {
    console.log("handlerAddProduct: name, price: ", name, price);

    // Create new list item
    const newItem = {
      name: name,
      quantity: count,
      price: price,
      discount: discount,
      total: (count * price * (100 - discount)) / 100,
    };

    // Copy previous list and append new item to its end
    const newList = [...list, newItem];
    console.log("  newList:", newList);
    setList(newList);

    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    console.log("  sumTotal:", sumTotal);
    setSumTotal(sum);
  };

  const data = {
    count,
    setCount,
    discount,
    setDiscount,
    list,
    setList,
    price,
    setPrice,
    sumTotal,
    setSumTotal,
    name,
    setName,
    handlerPlus,
    handlerMinus,
    handlerChangeName,
    handlerChangePrice,
    handlerAddProduct,
  };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}

export default ProductContext;

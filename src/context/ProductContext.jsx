import { createContext, useReducer } from "react";
import { productReducer, defaultProduct } from "../reducers/ProductReducers";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const handlerChangeName = (value) => {
    dispatch({ type: "SET_NAME", name: value });
  };

  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", price: value });
  };

  const handlerAddProduct = () => {
    dispatch({ type: "ADD_PRODUCT" });
  };

  const data = {
    count: state.count,
    discount: state.discount,
    list: state.list,
    price: state.price,
    sumTotal: state.sumTotal,
    originalSumTotal: state.originalSumTotal,
    name: state.name,
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

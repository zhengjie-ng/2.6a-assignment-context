import Product from "./components/Product";
import "./App.css";
import { ProductProvider } from "./components/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Product />
      </ProductProvider>
    </div>
  );
}

export default App;

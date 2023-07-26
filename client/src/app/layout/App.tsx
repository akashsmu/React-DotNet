import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5181/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        brand: "some Brand",
        description: "some Description",
        name: "Product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        pictureUrl: "http://www.google.com",
      },
    ]);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;

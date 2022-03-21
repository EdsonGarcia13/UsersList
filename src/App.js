import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  // ESTADO PRINCIPAL
  const [products, setProducts] = useState([]);
  const [productEdit, setProductEdit] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setProducts(res.data));
  }, []);

  const getProducts = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setProducts(res.data));
  };

  const addProduct = (product) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", product)
      .then(() => getProducts());
  };

  const removeProduct = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(() => getProducts());
      return Swal.fire({
        title: "Ready!",
        text: "Deleted!",
        icon: "success",
    });
  };

  const selectProduct = (product) => {
    setProductEdit(product);
  };


  const updateProduct = (product) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${product.id}/`, product)
      .then(() => getProducts());
  };

 

  return (
    <div className="App">
      
      <ProductsForm
        addProduct={addProduct}
        productEdit={productEdit}
        selectProduct={selectProduct}
        updateProduct={updateProduct}
      />
      <ProductsList
        products={products}
        removeProduct={removeProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;

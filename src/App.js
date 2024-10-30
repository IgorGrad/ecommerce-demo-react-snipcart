  import "./index.css"
  import "./App.css"
  import Product from "./components/Product";
  import { useState, useEffect } from "react";

  export default function App() {
    const [products, setProducts] = useState([]); // State to hold products
    const apiUrl = "http://localhost:3000/api/products"; // API URL

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(apiUrl);
          const text = await response.text(); // Get the response as text first
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = JSON.parse(text); // Parse the text as JSON
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
    
      fetchProducts();
    }, []);

    return (
        <div className={"container"}>
          <main className={"main"}>
            <h1>
              E-Commerce in React and SnipCart
            </h1>
            <div className={"grid"}>
              {
                products.map((product, i) => <Product {...product} key={i}/>)
              }
            </div>
          </main>

        </div>
    );
  }
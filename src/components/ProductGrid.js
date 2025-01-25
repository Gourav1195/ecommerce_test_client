import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Loader from "./Loader";
// import ProductCard from "./ProductCard";

import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?limit=20")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category?.name || "Unknown")),
          "All",
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = products;
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category?.name === activeCategory
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory, products]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category?.name === category
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) return <Loader />;


  return (
    <div className="container mx-auto p-6">
    <Navbar
      categories={categories}
      activeCategory={activeCategory}
      filterByCategory={setActiveCategory}
      cart={cart}
      setCart={setCart}
    />
      
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          className="p-4 border rounded-lg shadow-md bg-white relative"
        >
          <img
            src={product.images[0] || "https://via.placeholder.com/150"}
            alt={product.title || "Unnamed Product"}
            className="w-full h-40 object-cover rounded-md"
          />
          <button
            onClick={() => addToCart(product)}
            className="absolute top-2 right-2 m-3 bg-white text-black p-2 rounded-full"
          >
             <FaPlus />
          </button>
          <h3 className="text-lg font-semibold mt-2">{product.title || "Unnamed Product"}</h3>
          <p className="text-gray-500">{product.category?.name || "Unknown Category"}</p>
          <p className="text-xl font-bold">{product.price ? `${product.price}$` : "N/A"}</p>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default ProductGrid;

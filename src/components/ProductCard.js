// // const fetchProducts = async () => {
// //     const response = await axios.get('https://api.escuelajs.co/api/v1/products');
// //     return response.data;
// //   };

// import React from "react";
// import { motion } from "framer-motion";
// import { FaPlus } from "react-icons/fa";

// const ProductCard = ({ product }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.1 }}
//       className="bg-white p-4 rounded-2xl shadow-lg relative"
//     >
//       <img src={product.images?.[0]} alt={product.title} className=" w-full h-60 object-cover rounded-xl" />

//       <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-lg">
//         {product.category?.name} 
//       </span>

//       <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
//         <FaPlus />
//       </button>

//       <h2 className="text-sm font-semibold mt-3">{product.title}</h2>
//       <p className="text-lg font-bold mt-1">${product.price}</p>
//     </motion.div>
//   );
// };

// export default ProductCard;

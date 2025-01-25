import React, {useState} from "react";
import Cart from "./Cart";
import { useAuth } from "../auth/useAuth";

const Navbar = ({ categories, activeCategory, filterByCategory, cart, setCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth();

  return (
    <>
    <div className="flex justify-between items-center mb-4">
      <div className="hidden md:flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${
              activeCategory === category ? "bg-white text-black" : "bg-white sm:text-"
            }`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
        
      <Cart cart={cart} setCart={setCart} />
      </div>

      
      <div className="hidden md:flex">
        {isAuthenticated ? (
          <>
            {/* <span className="mr-4">Welcome, {user.name}</span> */}
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="bg-blue-500 px-4 py-2 m-2 rounded"
          >
            Login
          </button>
        )}
      </div>

      <button
          className="md:hidden flex bg-blue-600  p-2 rounded-md text-black focus:outline-none my-1 nav-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center py-4 space-y-4 cursor-pointer">
         
          <div className="md:flex space-x-4">
        {categories.map((category) => (
          <li
            key={category}
            className={`px-4 py-2 m-2 rounded-md ${
              activeCategory === category ? "bg-gray-200 text-black" : "bg-gray-200 sm:text-"
            }`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </li>
        ))}
        <li>
        <Cart cart={cart} setCart={setCart} />

        </li>
        <li>
        <div>
        {isAuthenticated ? (
          <>
            {/* <span className="mr-4">Welcome, {user.name}</span> */}
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="bg-blue-500 px-4 py-2 m-2 rounded"
          >
            Login
          </button>
        )}
      </div>
        </li>
      </div>
          
      </ul>)}

     
    {/* </div> */}
    </>
  );
};

export default Navbar;

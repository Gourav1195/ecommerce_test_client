import React, { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        🛒 My Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </button>

      {isModalOpen && (
        <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Order</h2>
              <button onClick={() => setModalOpen(false)} className="text-red-500">
                ✖
              </button>
            </div>
            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <img
                      src={item.images[0] || "https://via.placeholder.com/50"}
                      alt={item.title || "Unnamed Product"}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-gray-500">{item.price}$</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-green-500 text-white px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500"
                    >
                      ✖
                    </button>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-4">
                  <h3 className="font-bold">Total:</h3>
                  <p className="text-xl font-bold">${totalPrice}</p>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
                  Checkout
                </button>
              </>
            ) : (
              <p className="text-center text-gray-500">Your cart is empty!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

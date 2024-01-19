import PropTypes from "prop-types";
import { useState } from "react";
import { Ci, Md } from "../assets";
import { Button } from "./button";

export const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleToggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div>
      <Button onClick={handleToggleCart}>
        <Ci.CiShoppingCart className="text-3xl" />
      </Button>
      {cartOpen && (
        <div className=" bg-gray-400 fixed right-0 bottom-0 top-0 w-72 sm:w-56">
          <div className="text-white">
            <p>hello</p>
            <p>world</p>
          </div>
          <div className="flex items-center justify-center">
            <Button onClick={closeCart}>
              <Md.MdClose className="hover:text-red-600 text-2xl" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

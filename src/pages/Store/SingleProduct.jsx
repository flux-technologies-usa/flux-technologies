import React from "react";
import "./Store.scss";
import { useContext } from "react";
import { AuthContext } from "../../context api/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CartContext } from "../../context api/AddToCartContext";
const SingleProduct = ({ single }) => {
  // all declare
  const navgate = useNavigate();
  // all context
  const { user } = useContext(AuthContext);
  const { setCartLength, cartLength } = useContext(CartContext);
  const { name, price, _id } = single;

  // all function
  const top = () => {
    window.scroll(0, 0);
  };
  const handleAddToCart = () => {
    const email = user?.email;
    if (user?.uid) {
      const product = {
        email: email,
        quentity: 1,
        product: single,
      };

      fetch(
        `https://flux-server-lu38.onrender.com/api/v1/cart?email=${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCartLength(cartLength + 1);
        });
    } else {
      toast((t) => (
        <span>
          <span className="text-[#ddc861] text-[19px] mr-3 font-semibold">
            Please login first
          </span>
          <button className="btn glass" onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </span>
      ));
      navgate("/login");
      top();
    }
  };

  return (
    <div className="single-product w-[320px] h-[300px] bg-white single-product hover:bg-[#707070] relative">
      <div className="div">
        <div className="single-product-img h-[200px]">
          <img
            className="w-[200px] h-auto mx-auto pt-[50px]"
            src={`https://flux-server-lu38.onrender.com/api/v1/product/product-photo/${_id}`}
            alt={name}
          />
        </div>
        <div className="single-product-details text-black font-semibold mt-[25px] ml-3  opacity-80">
          <div className="product-price pb-1">${price}.00</div>
          <div className="product-name ">{name}</div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="btn absolute border-none top-[40%] right-[30%] rounded-none button">
        Add to cart
      </button>
    </div>
  );
};

export default SingleProduct;

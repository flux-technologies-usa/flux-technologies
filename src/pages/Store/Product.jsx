import { useState } from "react";
import "./Store.scss";
import { useEffect } from "react";

const Product = () => {
  // all state
  const [products, setProducts] = useState([]);

  // all Effects
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="product  bg-[#1b1b1b] pt-[230px]">
      <div className="product-header text-[60px] mx-auto py-10">
        <h1>Merchandise</h1>
      </div>

      <div className="product-section mx-[30px] grid grid-cols-1 gap-6 md:mx-[15%]  md:grid md:grid-cols-4  md:gap-6 text-black  pb-[100px]">
        {
          
        }
      </div>
    </div>
  );
};

export default Product;

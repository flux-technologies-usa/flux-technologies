import { useState } from "react";
import "./Store.scss";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])
  console.log(product)
  return (
    <div className="product  bg-[#1b1b1b] md:pt-40 pt-72">
      <div className="product-header mx-auto">
        <h1 className="lg:text-6xl text-3xl">Merchandise</h1>
      </div>

      <div className="product-section mx-[30px] grid grid-cols-1 gap-6 md:mx-[15%]  md:grid md:grid-cols-4  md:gap-6 text-black  pb-[100px]">

        {product.map(single=><SingleProduct single={single} id={single.id}/>)}

      </div>
    </div>
  );
};

export default Product;

import "./Store.scss";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://flux-server-lu38.onrender.com/api/v1/product/get-product")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 py-10 font-sans">
      <span className="text-6xl text-white font-semibold">Merchandise</span>
      <div className="grid lg:grid-cols-4 gap-8">
        {product?.map((single) => (
          <SingleProduct single={single} key={single.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;

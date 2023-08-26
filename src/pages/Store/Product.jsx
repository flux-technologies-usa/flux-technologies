import "./Store.scss";
import { battery } from "../../assets/Callback";

const Product = () => {
  return (
    <div className="product  bg-[#1b1b1b] pt-[230px]">
      <div className="product-header text-[60px] mx-auto py-10">
        <h1>Merchandise</h1>
      </div>

      <div className="product-section mx-[30px] grid grid-cols-1 gap-6 md:mx-[15%]  md:grid md:grid-cols-4  md:gap-6 text-black  pb-[100px]">

        <div className="single-product w-[320px] h-[300px] bg-white">
          <div className="div">
          <div className="single-product-img h-[200px]">
            <img
              className="w-[200px] h-auto mx-auto pt-[40px]"
              src={battery}
              alt="battery"
            />
          </div>
          <div className="single-product-details mt-[25px] ml-3 font-medium opacity-80">
            <div className="product-price pb-1">$500.00</div>
            <div className="product-name ">Battery</div>
          </div>
          </div>
          <div className="cartbtn">
            <div className="btn pt-4">Add to cart</div>
          </div>
        </div>

        


        <div className="single-product w-[320px] h-[300px] bg-white">
          <div className="single-product-img h-[200px]">
            <img
              className="w-[200px] h-auto mx-auto pt-[40px]"
              src={battery}
              alt="battery"
            />
          </div>
          <div className="single-product-details mt-[25px] ml-3 font-medium opacity-80">
            <div className="product-price pb-1">$500.00</div>
            <div className="product-name ">Battery</div>
          </div>
        </div>
        <div className="single-product w-[320px] h-[300px] bg-white">
          <div className="single-product-img h-[200px]">
            <img
              className="w-[200px] h-auto mx-auto pt-[40px]"
              src={battery}
              alt="battery"
            />
          </div>
          <div className="single-product-details mt-[25px] ml-3 font-medium opacity-80">
            <div className="product-price pb-1">$500.00</div>
            <div className="product-name ">Battery</div>
          </div>
        </div>
        <div className="single-product w-[320px] h-[300px] bg-white">
          <div className="single-product-img h-[200px]">
            <img
              className="w-[200px] h-auto mx-auto pt-[40px]"
              src={battery}
              alt="battery"
            />
          </div>
          <div className="single-product-details mt-[25px] ml-3 font-medium opacity-80">
            <div className="product-price pb-1">$500.00</div>
            <div className="product-name ">Battery</div>
          </div>
        </div>
        <div className="single-product w-[320px] h-[300px] bg-white">
          <div className="single-product-img h-[200px]">
            <img
              className="w-[200px] h-auto mx-auto pt-[40px]"
              src={battery}
              alt="battery"
            />
          </div>
          <div className="single-product-details mt-[25px] ml-3 font-medium opacity-80">
            <div className="product-price pb-1">$500.00</div>
            <div className="product-name ">Battery</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;

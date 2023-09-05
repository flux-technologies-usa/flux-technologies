import Product from "./Product";
import "./Store.scss";
import Storeheader from "./Storeheader";

const Store = () => {
  return (
    <div style={{fontFamily:"Schnyder S"}}>
      <Storeheader />
      <Product />
    </div>
  );
};

export default Store;

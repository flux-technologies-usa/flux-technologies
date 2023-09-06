const pushToLocalStroge = (productData) => {
  if (localStorage.getItem("cart")) {
    const previousJsonData = localStorage.getItem("cart");
    const previousData = JSON.parse(previousJsonData);
    const newData = [...previousData, productData];
    const newJsonData = JSON.stringify(newData);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", newJsonData);
  } else {
    const newData = [productData];
    const newJsonData = JSON.stringify(newData);
    localStorage.setItem("cart", newJsonData);
  }
};

export default pushToLocalStroge;

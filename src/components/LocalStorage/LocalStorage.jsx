export const pushToLocalStroge = (productData) => {
  if (localStorage.getItem("cart")) {
    const previousData = JSON.parse(localStorage.getItem("cart"));
    let exist = false;
    let existProductID = 0;
    previousData.forEach((product) => {
      if (product.product.id === productData.product.id) {
        exist = true;
        existProductID = product.id;
      }
    });
    if (exist) {
      const unChengedPreviousData = previousData.filter(
        (product) => product.id !== existProductID
      );
      const modifiedPreviousData = previousData.filter(
        (product) => product.id === existProductID
      );

      const modifiedData = modifiedPreviousData[0];
      const modifiedQuentity = modifiedData.quentity + productData.quentity;
      modifiedData.quentity = modifiedQuentity;
      const newModifiedArray = [modifiedData];

      const newData = [...newModifiedArray, ...unChengedPreviousData];

      const newJsonData = JSON.stringify(newData);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", newJsonData);
    } else {
      const newData = [...previousData, productData];
      const newJsonData = JSON.stringify(newData);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", newJsonData);
    }
  } else {
    const newData = [productData];
    const newJsonData = JSON.stringify(newData);
    localStorage.setItem("cart", newJsonData);
  }
};

export const handleRemove = (products, product) => {
  const newData = products.filter((p) => p.id !== product.id);
  const newJsonData = JSON.stringify(newData);
  localStorage.setItem("cart", newJsonData);
};

export const handleQuantityIncrease = (products, product) => {
  const unChengedPreviousData = products.filter((p) => p.id !== product.id);
  const modifiedPreviousData = products.filter((p) => p.id === product.id);

  const modifiedData = modifiedPreviousData[0];
  const modifiedQuentity = modifiedData.quentity + 1;
  modifiedData.quentity = modifiedQuentity;
  const newModifiedArray = [modifiedData];
  const newData = [...newModifiedArray, ...unChengedPreviousData];

  const newJsonData = JSON.stringify(newData);
  localStorage.removeItem("cart");
  localStorage.setItem("cart", newJsonData);
};
export const handleQuantityDecrease = (products, product) => {
  const unChengedPreviousData = products.filter((p) => p.id !== product.id);
  const modifiedPreviousData = products.filter((p) => p.id === product.id);

  const modifiedData = modifiedPreviousData[0];
  const modifiedQuentity = modifiedData.quentity - 1;

  if (modifiedQuentity === 0) {
    const newData = [...unChengedPreviousData];

    const newJsonData = JSON.stringify(newData);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", newJsonData);
  } else {
    modifiedData.quentity = modifiedQuentity;
    const newModifiedArray = [modifiedData];
    const newData = [...newModifiedArray, ...unChengedPreviousData];

    const newJsonData = JSON.stringify(newData);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", newJsonData);
  }
};

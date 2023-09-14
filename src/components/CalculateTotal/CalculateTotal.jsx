export const calculateTotal = (products) => {
  let total = 0;
  products.forEach((product) => {
    const price = product.product.price;
    const quantity = product.quentity;
    const productPrice = price * quantity;
    total = total + productPrice;
  });
  return total;
};

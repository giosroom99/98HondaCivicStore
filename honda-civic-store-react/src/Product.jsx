function Product({ products = [] }) {
  if (!products.length >= 1) {
    return (
      <div>
        <h1>Product Page</h1>
        <h4>No products</h4>
      </div>
    );
  }
  return (
    <>
      <h1>Product Page</h1>
      {products.map((product, index) => (
        <li key={index}>{product.productName}</li>
      ))}
    </>
  );
}
export default Product;

import Product from "./Product"
function ProductTab(){
  let features = ["hi-tech" , "durable" , "fast"]
    return(
    <>
      <Product title="phone" price={60000} features={features} />
      <Product title="Laptop" price={45000} />
      <Product title="Tab" price={30000} />
      <Product title="TV" price={30000} />
    </>
    )
}

export default ProductTab
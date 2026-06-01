import './Product.css'
import Price from "./Price"

function Product({title , idx}){
    let oldPrices = ["50,000" ,"98,000" , "50,000" , "112,000"]
    let newPrices = ["45,000" ,"89,000" , "46,000" , "100,000"]
    let description = ["128GB RAM" , "64GB RAM" , "55 INCH Display" , "NVIDIA graphic card RTX4060"]
    return(
        <div className="Product">
            <h1>{title}</h1>
            <p className="description">{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    )
}
export default Product
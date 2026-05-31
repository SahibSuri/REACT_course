import './Product.css'
// one way
// function Product({title , price , features = []}){
//     if(price>30000){
//         return(
//             <div className='Product'>
//                 <h3>{title}</h3>
//                 <h5>PRICE: {price}</h5>
//                 <p>Discount of 5%</p>
//             </div>
//         )
//     }  else{
//         return(
//             <div className='Product'>
//                 <h3>{title}</h3>
//                 <h5>PRICE: {price}</h5>
//             </div>
//         )
//     }
// }

// second way
function Product({title , price , features=[]}){
    let styles = {backgroundColor: price>30000 ? "blue" : "pink"}
    let isDiscount = price > 30000 ? "Discount of 5%" : "Sorry, No discount applicable"
    return(
        <div className='Product' style={styles}>
            <h3>{title}</h3>
            <h5>PRICE: {price}</h5>
            {price>30000 && <p>Discount of 5%</p>}
        </div>
    )
}

export default Product
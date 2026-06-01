export default function Price({ oldPrice, newPrice }) {
    return (
        <div className="price-row">
            <p className="old-price">{oldPrice}</p>
            <p className="new-price">₹{newPrice}</p>
        </div>
    )
}
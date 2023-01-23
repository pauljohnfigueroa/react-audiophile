const ProductInTheBox = ({ quantity, description }) => {
    return (
        <>
            <li>
                <p className="quantity">{quantity}x</p>
                <p className="description">{description}</p>
            </li>
        </>
    );
}
export default ProductInTheBox;
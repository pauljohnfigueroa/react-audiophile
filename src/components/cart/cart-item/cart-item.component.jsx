// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../../store/cart/cart.action";
// import { CartContext } from "../../../contexts/cart.context";


const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    // const { addItemToCart, removeITemToCart, clearItemFromCart } = useContext(CartContext);

    const addItemFromCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeITemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <>
            <div key={cartItem.id} className="item-row">
                <div className="item-image-container">
                    <img src={cartItem.thumbnail} alt="" />
                </div>

                <div className="item-details">
                    <div className="item-title-price">
                        <p className="item-title">{cartItem.name}</p>
                        <p className="item-price">${cartItem.price}</p>
                    </div>
                    <form action="#" className="cart-quantity">
                        <div className="quantity-nav">
                            <div className="quantity-button quantity-down" onClick={removeITemFromCartHandler}>-</div>
                        </div>
                        <input type="number" min="0" value={cartItem.quantity} className="quantity" onChange={() => { }} />
                        <div className="quantity-nav">
                            <div className="quantity-button quantity-up" onClick={addItemFromCartHandler}>+</div>
                        </div>
                    </form>
                    <span onClick={clearItemFromCartHandler} className="x-button">&#10005;</span>
                </div>

            </div>
        </>
    );

}
export default CartItem;
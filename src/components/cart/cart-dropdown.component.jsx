import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from './cart-item/cart-item.component'

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { setIsCartOpen, removeAllItemsFromCart } from '../../store/cart/cart.action'

const CartDropDown = () => {

    const cartRef = useRef()

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (!cartRef.current.contains(event.target)) {
                dispatch(setIsCartOpen(false))
            }
        })
    })

    // toggle
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(false))

    const navigate = useNavigate()

    const goToCheckOutHandler = () => {
        toggleIsCartOpen()
        navigate('/checkout')
    }

    let cartItemsArray = cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
    ) : (
        <h2 class="text-align-center">Your cart is empty.</h2>
    )

    const removeAllFromCartHandler = () => dispatch(removeAllItemsFromCart(cartItems))

    return (
        <>
            <section ref={cartRef} className="cart-modal">
                <aside className="cart p-1rem">
                    <div className="heading-container mb-1rem">
                        <h2 className="heading cart-total">
                            Cart<span>({cartTotal})</span>
                        </h2>
                        <p onClick={toggleIsCartOpen} className="text-align-right width-50pct">
                            <span className="x-button">&#10005;</span>
                        </p>
                    </div>
                    {cartItemsArray.length && (
                        <div className="text-align-right">
                            <Button
                                className="cart-remove-all-btn"
                                onClick={removeAllFromCartHandler}
                            >
                                Remove All
                            </Button>
                        </div>
                    )}

                    {cartItemsArray}

                    <div className="button-container mt-1rem">
                        {cartItemsArray.length ? (
                            <Button
                                label="Checkout"
                                type="button"
                                className="cart-checkout-btn"
                                onClick={goToCheckOutHandler}
                            >
                                Checkout
                            </Button>
                        ) : (
                            <Button disabled={true} >Checkout</Button>
                        )}
                    </div>
                </aside>
            </section>
        </>
    )
}
export default CartDropDown

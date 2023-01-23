import { Fragment } from 'react'
import { useSelector } from 'react-redux'
//import { CartContext } from '../../contexts/cart.context';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { selectCartItems, selectCartTotalAmount } from '../../store/cart/cart.selector'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import CartItem from '../cart/cart-item/cart-item.component'

/* 
We can split this component into two and keep the code in this file.
This is not always considered best practice because it seems more obvious to split the
component into smaller ones. However, sometimes it helps to keep the
render method cleaner.

    const renderUserMenu = () => {
    // JSX for user menu
    }
    const renderAdminMenu = () => {
    // JSX for admin menu
    }
    return (
        <div>
        <h1>Welcome back!</h1>
        {userExists && renderUserMenu()}
        {userIsAdmin && renderAdminMenu()}
        </div>
    )
*/

const CheckOut = () => {
    // const { cartItems, cartTotalAmount } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems)
    const cartTotalAmount = useSelector(selectCartTotalAmount)

    let cartItemsArray = cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
    ) : (
        <h2 class="text-align-center">Your Cart is Empty.</h2>
    )

    return (
        <Fragment>
            <section className="checkout">
                < Formik

                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        zipcode: '',
                        city: '',
                        country: '',
                        paymentMethod: '',
                        eMoneyNum: '',
                        eMoneyPin: ''
                    }}

                    validationSchema={Yup.object({
                        name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                        email: Yup.string().email('Please give a valid email address.').required('Required'),
                        phone: Yup.string().matches(/^[0-9]+$/, 'Must be numbers only.').required('Required'),
                        address: Yup.string(),
                        zipcode: Yup.string().matches(/^[0-9]+$/, 'Must be numbers only.'),
                        city: Yup.string(),
                        country: Yup.string(),
                        paymentMethod: Yup.string().required("Please select a payment method."),
                    })}

                    onSubmit={values => {
                        // Handle submitted values here
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {formik => (
                        <section className="checkout-form">
                            <h2>Checkout</h2>

                            <Form>
                                <fieldset className="billing-details">
                                    <legend>Billing Details</legend>
                                    <div className="text-input">
                                        <label htmlFor="name">Name</label>
                                        <Field name="name" type="text" />
                                        <ErrorMessage name="name" />
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="name">Email Address</label>
                                        <Field name="email" type="email" />
                                        <ErrorMessage name="email" />
                                    </div>

                                    <div className="text-input">
                                        <label htmlFor="phone">Phone</label>
                                        <Field name="phone" type="text" />
                                        <ErrorMessage name="phone" />
                                    </div>
                                </fieldset>

                                <fieldset className="shipping-info">
                                    <legend>Shipping info</legend>
                                    <div className="text-input address">
                                        <label htmlFor="address">Address</label>
                                        <Field name="address" type="text" />
                                        <ErrorMessage name="address" />
                                    </div>
                                    <div className="address-details">
                                        <div className="text-input">
                                            <label htmlFor="zipcode">Zip Code</label>
                                            <Field name="zipcode" type="text" />
                                            <ErrorMessage name="zipcode" />
                                        </div>
                                        <div className="text-input">
                                            <label htmlFor="zipcode">City</label>
                                            <Field name="city" type="text" />
                                            <ErrorMessage name="city" />
                                        </div>
                                        <div className="text-input">
                                            <label htmlFor="zipcode">Country</label>
                                            <Field name="country" type="text" />
                                            <ErrorMessage name="country" />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="payment-details">
                                    <legend>Payment Details</legend>
                                    <div className="text-input">
                                        <label htmlFor="">Payment Method</label>
                                    </div>
                                    <div className="radio-group">
                                        <div className="radio-item">
                                            <label>
                                                <Field type="radio" name="paymentMethod" value="emoney" />
                                                e-Money
                                            </label>
                                        </div>
                                        <div className="radio-item">
                                            <label>
                                                <Field type="radio" name="paymentMethod" value="cod" />
                                                Cash on Delivery
                                            </label>
                                        </div>
                                        <ErrorMessage name="paymentMethod" />
                                    </div>
                                    <div className="text-input">
                                        <label htmlFor="eMoneyNum">e-Money Number</label>
                                        <Field name="eMoneyNum" type="text" />
                                        <ErrorMessage name="eMoneyNum" />
                                    </div>
                                    <div className="text-input">
                                        <label htmlFor="eMoneyPin">e-Money PIN</label>
                                        <Field name="eMoneyPin" type="text" />
                                        <ErrorMessage name="eMoneyPin" />
                                    </div>
                                </fieldset>

                                <div className="button-container">
                                    <Button type="submit" label="Continue & Pay" />
                                </div>
                            </Form>
                        </section>
                    )}
                </Formik >

                <section className="checkout-summary">
                    <h2 className="heading">Summary</h2>

                    {cartItemsArray}

                    <div className="price-details mt-2rem">
                        <div className="price-row">
                            <p className="label">Total</p>
                            <p className="price">$ {cartTotalAmount.toFixed(2).toLocaleString()}</p>
                        </div>
                        <div className="price-row">
                            <p className="label">Shipping</p>
                            <p className="price">$ {(cartTotalAmount * 0.05).toFixed(2).toLocaleString()}</p>
                        </div>
                        <div className="price-row">
                            <p className="label">VAT</p>
                            <p className="price">$ {(cartTotalAmount * 0.12).toFixed(2).toLocaleString()}</p>
                        </div>
                        <div className="price-row">
                            <p className="label">Grand Total</p>
                            <p className="price">
                                {(cartTotalAmount * 1.12 + cartTotalAmount * 0.05).toFixed(2).toLocaleString('en')}
                            </p>
                        </div>
                    </div>
                    <div className="button-container">
                        <Button type="button" label="Continue & Pay" />
                    </div>
                </section>
            </section>
        </Fragment >
    )
}
export default CheckOut

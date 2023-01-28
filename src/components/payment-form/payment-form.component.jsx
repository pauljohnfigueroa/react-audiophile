import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotalAmount } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const amount = useSelector(selectCartTotalAmount)
    const currentUser = useSelector(selectCurrentUser)
    const grandTotalAmount = (amount * 1.12 + amount * 0.05).toFixed(2).toLocaleString('en')

    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {

        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsProcessingPayment(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: grandTotalAmount * 100 })
        }).then(res => res.json())

        // console.log(response)
        const { paymentIntent: { client_secret } } = response
        console.log(client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded')
                alert('Payment Successful.')
        }
    }

    return (
        <form onSubmit={paymentHandler}>
            <h2>Credit Card Payment:</h2>
            <CardElement />
            <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.google} >Pay Now</Button>
        </form>
    )
}
export default PaymentForm
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
    }

    return (
        <div>
            <h2>Credit Card Payment:</h2>
            <CardElement />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
        </div>
    )
}
export default PaymentForm
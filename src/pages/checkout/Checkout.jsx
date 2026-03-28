import { CheckoutContainer } from "./components/CheckoutContainer";
import { CheckoutHeader } from "./components/CheckoutHeader";
import { CheckoutPaymentSummary } from "./components/CheckoutPaymentSummary";
import  './Checkout.css'
export function Checkout(){
    return(
        <>
            <link rel="icon" type="image/png" href="images/icons/cart-favicon.png" />
            <CheckoutHeader/>
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">

                    <div className="order-summary">
                        <CheckoutContainer/>
                        {/* <CheckoutContainer/> */}
                    </div>

                    <CheckoutPaymentSummary/>
                    
                </div>
            </div>
        </>
    );
}
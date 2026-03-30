import { CheckoutContainer } from "./components/CheckoutContainer";
import { CheckoutHeader } from "./components/CheckoutHeader";
import { CheckoutPaymentSummary } from "./components/CheckoutPaymentSummary";
import  './Checkout.css'
import { useEffect, useState } from "react";
import axios from "axios";
export function Checkout({cart}){
    console.log(cart);
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary,setPaymentSummary] = useState(null);

    useEffect(()=>{
        const checkoutPageData = async ()=>{
            let response= await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);
            response= await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }
        checkoutPageData();
    },[]);

    if (deliveryOptions.length === 0 || !paymentSummary) {
        return <div>Loading checkout...</div>;
    }
    
    return(
        <>
            <link rel="icon" type="image/png" href="images/icons/cart-favicon.png" />
            <CheckoutHeader cart={cart}/>
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    
                    <div className="order-summary">
                        {cart.map(cartItem => {
                            return <CheckoutContainer key={cartItem.product.id} cartItem={cartItem} deliveryOptions={deliveryOptions}/>
                        })}
                    </div>

                    {paymentSummary && <CheckoutPaymentSummary paymentSummary={paymentSummary}/>}
                    
                </div>
            </div>
        </>
    );
}
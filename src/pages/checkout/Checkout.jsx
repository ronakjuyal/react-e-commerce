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
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response)=>{
                setDeliveryOptions(response.data);
            });
        axios.get('/api/payment-summary') 
            .then(response=>{
                setPaymentSummary(response.data);
                console.log(response.data);
            })
    },[]);
    return(
        <>
            <link rel="icon" type="image/png" href="images/icons/cart-favicon.png" />
            <CheckoutHeader/>
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
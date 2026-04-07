import dayjs from "dayjs";
import { FormatMoney } from "../../../utils/FormatMoney";
import axios from "axios";

export function DeliveryOption({option, cartItem, fetchCart}){

    const updateDeliveryOption = async ()=>{
        await axios.put(`/api/cart-items/${cartItem.productId}`,{deliveryOptionId:option.id})
        await fetchCart();
    }
    return <div key={option.id} className="delivery-option" onClick={updateDeliveryOption}>
                <input type="radio" checked={option.id=== cartItem.deliveryOptionId} onChange={()=>{}} className="delivery-option-input" name={'delivery-option-'+cartItem.productId} />
                <div>
                    <div className="delivery-option-date">
                        {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>
                    <div className="delivery-option-price">
                        {option.priceCents?FormatMoney(option.priceCents):'FREE Shipping'}
                    </div>
                </div>
            </div>
}
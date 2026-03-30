import dayjs from "dayjs";
import { FormatMoney } from "../../../utils/FormatMoney";

export function DeliveryOption({option, cartItem}){
    return <div key={option.id} className="delivery-option">
                <input type="radio" checked={option.id=== cartItem.deliveryOptionId} className="delivery-option-input" name={'delivery-option-'+cartItem.productId} />
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
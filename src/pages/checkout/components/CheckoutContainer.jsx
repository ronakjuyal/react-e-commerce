
import { FormatMoney } from "../../../utils/FormatMoney";
import dayjs from "dayjs";
import { DeliveryOption } from "./DeliveryOption";

export function CheckoutContainer({cartItem, deliveryOptions,fetchCart}){
    
    const selectedDeliveryOption = deliveryOptions.find(option=>option.id===cartItem.deliveryOptionId);
    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItem.product.name}
                    </div>
                    <div className="product-price">
                        {FormatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                            Delete
                        </span>
                    </div>
                </div>

                <div className="delivery-options">
                    <div className="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    {deliveryOptions.map(option=>{
                        return <DeliveryOption key={option.id} option={option} cartItem={cartItem} fetchCart={fetchCart}/>
                    })}
                </div>
            </div>
        </div>
    );
}
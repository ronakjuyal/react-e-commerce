import { OrderItem } from "./OrderItem";
import { OrderSummary } from "./OrderSummary";

export function OrderContainer({order}){
    return (
        <div className="order-container">

            <OrderSummary order={order}/>

            <div className="order-details-grid">
              {order.products.map(productDetail=>{
                return <OrderItem key={productDetail.productId} order={order} productDetail={productDetail}/>
              })}
            </div>
        </div>
    );
}
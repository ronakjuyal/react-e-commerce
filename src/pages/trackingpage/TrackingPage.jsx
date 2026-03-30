import { Link, useParams } from 'react-router';
import { PageHeader } from '../PageHeader';
import './TrackingPage.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
export function TrackingPage({cart}){
    const {orderId, productId} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        const fetchOrder = async()=>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        } 
        fetchOrder();
    },[orderId])

    if(!order) return null;

    const orderProduct = order.products.find(product=>product.productId===productId);
    const totalDeliveryTime = orderProduct.estimatedDeliveryTimeMs-order.orderTimeMs;
    const timePassed= dayjs().valueOf()-order.orderTimeMs;
    let deliveryPercent = (timePassed/totalDeliveryTime)*100;

    if(deliveryPercent>100){
        deliveryPercent = 100;
    }
    const currentStatus=deliveryPercent===100?'isDelivered':deliveryPercent>=33?'isShipped':'isPreparing';

    return (
        <>
            <PageHeader cart={cart}/>
            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {deliveryPercent===100?'Delivered on ':'Arriving on '} {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {orderProduct.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${currentStatus==='isPreparing'?'current-status':''}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${currentStatus==='isShipped'?'current-status':''}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${currentStatus==='isDelivered'?'current-status':''}`}>
                            Delivered
                        </div>
                    </div>

                        <div className="progress-bar-container">
                        <div className="progress-bar" style={{
                            width: `${deliveryPercent}%`
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader";
import { OrderContainer } from "./components/OrderContainer";
import './OrdersPage.css'
import axios from "axios";
export function OrdersPage({cart}){
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        const fetchOrders=async ()=>{
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }
        fetchOrders();
    },[]);
    return (
        <>
            <link rel="icon" type="image/png" href="images/icons/orders-favicon.png" />
            <PageHeader cart={cart}/>
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                    <div className="orders-grid">
                        {orders && orders.map(order=>{
                            return <OrderContainer key={order.id} order={order}/>
                        })}
                    </div>
            </div>
        </>
    );
}
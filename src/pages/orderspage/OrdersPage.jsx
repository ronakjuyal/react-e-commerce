import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader";
import { OrderContainer } from "./components/OrderContainer";
import './OrdersPage.css'
import axios from "axios";
export function OrdersPage(){
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        axios.get('/api/orders?expand=products')
            .then((response)=>{
                setOrders(response.data);
            });
    },[]);
    return (
        <>
            <link rel="icon" type="image/png" href="images/icons/orders-favicon.png" />
            <PageHeader />
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
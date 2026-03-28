import { PageHeader } from "../PageHeader";
import { OrderContainer } from "./components/OrderContainer";
import './OrdersPage.css'
export function OrdersPage(){
    return (
        <>
            <link rel="icon" type="image/png" href="images/icons/orders-favicon.png" />
            <PageHeader />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                    <div className="orders-grid">
                        <OrderContainer/>
                        <OrderContainer/>
                    </div>
            </div>
        </>
    );
}
import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/homepage/HomePage'
import { Checkout } from './pages/checkout/Checkout'
import { OrdersPage } from './pages/orderspage/OrdersPage'
import { TrackingPage } from './pages/trackingpage/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);
  const fetchCart=async ()=>{
      const response = await axios.get('api/cart-items?expand=product');
        setCart(response.data);
      }

  useEffect(()=>{
    
      fetchCart();
    },[]);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} fetchCart={fetchCart}/>}/>
      <Route path="checkout" element={<Checkout cart={cart}/>}/>
      <Route path="orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>}/>
    </Routes>
  )
}

export default App

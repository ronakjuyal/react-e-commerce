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
  useEffect(()=>{
    const fetchCart=async ()=>{
      const response = await axios.get('api/cart-items?expand=product');
        setCart(response.data);
      }
      fetchCart();
    },[]);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>}/>
      <Route path="checkout" element={<Checkout cart={cart}/>}/>
      <Route path="orders" element={<OrdersPage/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App

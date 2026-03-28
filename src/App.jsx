import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/homepage/HomePage'
import { Checkout } from './pages/checkout/Checkout'
import { OrdersPage } from './pages/orderspage/OrdersPage'
import { TrackingPage } from './pages/trackingpage/TrackingPage'

function App() {
 

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="orders" element={<OrdersPage/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App

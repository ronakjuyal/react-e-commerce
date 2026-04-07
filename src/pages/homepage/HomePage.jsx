import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader";
import { ProductGrid } from "./components/ProductGrid";
import axios from "axios";
export function HomePage({cart, fetchCart}){
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const response = await axios.get('api/products')
            setProducts(response.data);
        }
        fetchProduct();
    },[]);
    return (<>
            <link rel="icon" type="image/png" href="images/icons/home-favicon.png" />
            <PageHeader cart={cart}/>
            <div className='home-page'>
                <ProductGrid products={products} fetchCart={fetchCart}/>
            </div>
        </>
    );
    
}
//
import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader";
import { ProductGrid } from "./components/ProductGrid";
import axios from "axios";
export function HomePage(){
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
            .then((response)=>{
                setProducts(response.data);
            });
    },[]);
    return (<>
            <link rel="icon" type="image/png" href="images/icons/home-favicon.png" />
            <PageHeader/>
            <div className='home-page'>
                <ProductGrid products={products}/>
            </div>
        </>
    );
    
}
//
import {ProductCard} from './ProductCard'
export function ProductGrid({products, fetchCart}){
    return (
        <div className="products-grid">
            {products.map(product=>{
                    return <ProductCard product={product} key={product.id} fetchCart={fetchCart}/>;
                })}
        </div>
    );
}
//
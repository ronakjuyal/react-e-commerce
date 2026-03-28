import {ProductCard} from './ProductCard'
export function ProductGrid({products}){
    return (
        <div className="products-grid">
            {products.map(product=>{
                    return <ProductCard product={product} key={product.id}/>;
                })}
        </div>
    );
}
//
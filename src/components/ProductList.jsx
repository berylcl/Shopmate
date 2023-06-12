import {useEffect, useState} from "react";
import '../App.css'
const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
            .catch((error) => {
                console.error(error)
            })
    },[])
    return (
        <section>
            <h1>Product list</h1>
            <div key={products.id}>
                {products.map((product) => {
                    // eslint-disable-next-line react/jsx-key
                    return (
                        <p key={product.id}>
                            {product.name}
                            <br />
                            <span> ${product.price}</span>
                            <br />
                            <span>{product.in_stock? " In Stock": " Out of stock"}</span>
                        </p>)
                })}
            </div>
        </section>
    )
}
export default ProductList
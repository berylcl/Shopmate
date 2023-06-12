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
            <div className='card' key={products.id}>
                {products.map((product) => {
                    // eslint-disable-next-line react/jsx-key
                    return (
                        <p className='card' key={product.id}>
                            <p className='id'>{product.id}</p>
                            <p className='name'>{product.name}</p>
                            <br />
                            <div className="info">
                                <span> ${product.price}</span>
                                <br />
                                <span className={product.in_stock? "instock":"unavailable"}>{product.in_stock? " In Stock": " Out of stock"}</span>
                            </div>
                        </p>)
                })}
            </div>
        </section>
    )
}
export default ProductList
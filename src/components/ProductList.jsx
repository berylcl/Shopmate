import {useEffect, useState} from "react";
import '../App.css'
const ProductList = () => {
    const [products, setProducts] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/products')
    useEffect( () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.error(error)
            })
    },[url])
    return (
        <section>
            <h1>Product list</h1>
            <button onClick={ () => setUrl('http://localhost:3000/products')}>All products</button>
            <button onClick={ () => setUrl("http://localhost:3000/products?in_stock=true")}>In stock only</button>
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
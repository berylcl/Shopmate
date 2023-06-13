import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.js";
import "../App.css";
import "./loadingSpinner.css";

const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:3000/products");
    const { data: products, loading } = useFetch(url);

    return (
        <section>
            <h1>Product list</h1>
            <button>{products ? products.length : 0}</button>
            <button onClick={() => setUrl("http://localhost:3000/products")}>
                All products
            </button>
            <button
                onClick={() =>
                    setUrl("http://localhost:3000/products?in_stock=true")
                }
            >
                In stock only
            </button>

            {loading ? (
                <div className="loadingSpinner">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div>
                    {products && (
                        <div className="card">
                            {products.map((product) => (
                                <p className="card" key={product.id}>
                                    <p className="id">{product.id}</p>
                                    <p className="name">{product.name}</p>
                                    <br />
                                    <div className="info">
                                        <span>${product.price}</span>
                                        <br />
                                        <span
                                            className={
                                                product.in_stock ? "instock" : "unavailable"
                                            }
                                        >
                      {product.in_stock ? " In Stock" : " Out of stock"}
                    </span>
                                    </div>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default ProductList;


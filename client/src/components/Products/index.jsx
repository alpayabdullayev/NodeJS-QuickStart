import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const BASEURL = "http://localhost:8000/products";

    const getProducts = async () => {
        try {
            const response = await axios.get(BASEURL);
            setProducts(response.data);
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <h1>PRODUCT</h1>

            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="cards">
                        {products && products.map((item) => (
                            <div key={item.id} className="card">
                                <div className="cardImg">
                                    <img src={item.image} alt="" />
                                </div>
                                <h2>{item.name}</h2>
                                <p>Price: {item.price}AZN</p>
                                <h5>INFO : {item.info}</h5>
                                <button> <Link to={`/product/${item.id}`}>Detail</Link></button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
};

export default Products;

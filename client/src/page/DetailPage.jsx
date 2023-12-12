import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null); 

    const BASEURL = "http://localhost:8000/products";

    async function getProductDetails() {
        try {
            const response = await fetch(`${BASEURL}/${productId}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, [productId]);

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>Price: AZN{product.price}</p>
                    <p>INFO: {product.info}</p>
                    <img src={product.image} alt="" />
                    <button><Link to={"/"}>Back To </Link></button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailPage;

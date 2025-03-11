import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchProduct } from '../reduxSlice/ProductSlice'
import Product_card from '../components/Product_card'


const Shop = () => {

    const dispatch = useDispatch();

    const { status, item } = useSelector((state) => state.product);

    console.log(status);
    console.log("product data", item);


    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);


    return (
        <div>
            {status === "loading" && <p>Loading...</p>}
            <div className="grid grid-cols-3 gap-8 p-4 ">

                {status === "succeeded" && item.map((products) => (
                    <Product_card key={products.id} products={products} />
                ))}
            </div>

            {status === "failed" && <p>Failed to load products.</p>}
        </div>
    );
};

export default Shop
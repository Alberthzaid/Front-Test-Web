import React, {useEffect, useState} from 'react'
import './ProductContainer.css'
import{ProductCard} from "../ProductCard/ProductCard.jsx";
import {getData} from "../../../Helpers/ApiConfig/Controllers/ControllersFetch.js";
import {Loader} from "../../Loader/Loader.jsx";


export const ProductsContainer = ({api}) => {

    const [ products , setProducts ] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        const getProductList = async ()=>{
            try{
                const data = await getData(api)
                setProducts(data);
                setLoading(false)

            }catch (error){
                throw error;
            }
        }
        getProductList()}, []);

    if(loading){
        return <Loader/>
    }

    return (
        <>
            <div className="titleProducts">
                <h2 className="titleProducts-title">
                    OUR PRODUCTS
                </h2>
            </div>

            <div className="Container_Products">
                {products.map((product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                )))}
            </div>
        </>


    )
}

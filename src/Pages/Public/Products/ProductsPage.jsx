import React from 'react'
import {ProductsContainer} from "../../../Components/Products/ProductContainer/ProductsContainer.jsx";
import {API_GET_PRODUCTS} from "../../../Helpers/ApiConfig/Controllers/Apis.js";

const api = API_GET_PRODUCTS;

export const ProductsPage = () => {
    return (
        <div className="ProductsPage">
            <ProductsContainer api={api}/>
        </div>
    )
}

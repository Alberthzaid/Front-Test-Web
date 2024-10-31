// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import {Header} from "../../../Components/Header/Header.jsx";
import {SliderCardHeader} from "../../../Components/SlidersComponents/SliderCard.Header.jsx";
import {ProductsContainer} from "../../../Components/Products/ProductContainer/ProductsContainer.jsx";
import {API_GET_PRODUCTS} from "../../../Helpers/ApiConfig/Controllers/Apis.js";
import {ButtonViewMore} from "../../../Components/Buttons/ButtonViewMore/ButtonViewMore.jsx";

const api = `${API_GET_PRODUCTS}`

export const Home = () => {
    return (
        <div>
            <section className="HeaderHomeContent">
                <Header/>
            </section>

            <section className="SliderHomeContent">
                <SliderCardHeader/>
            </section>

            <section className="ProductsHomeContent">
                <ProductsContainer api={api}/>
                <ButtonViewMore/>
            </section>

        </div>
    )
}

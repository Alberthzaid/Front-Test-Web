import React from 'react'
import './ProductCard.css'
import {ButtonCart} from "../../Buttons/ButtonCart/ButtonCart.jsx";

export const ProductCard = ({product}) => {
    return (
        <div className="ProductConten">
            <div className="ProductImage-Content">
                <img className="ProductImage" src={product.imagen}/>
            </div>
            <div className="notification">
            <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">
                    <h3 className="notititle-title">{product.nombre}</h3>
                </div>
            </div>
            <ButtonCart product={product}/>
        </div>
    )
}

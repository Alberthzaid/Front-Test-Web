import React from 'react'
import './ButtonCart.css'
import {useCartStore} from "../../../GlobalState/CartState/CartState.jsx";
import 'boxicons'


export const ButtonCart = ({product}) => {
    const addProduct = useCartStore((state) => state.addItem)

    const hadleClickCart = ()=>{
        addProduct(product);
    }

    return (
        <button onClick={hadleClickCart} className="buttonCart">
            <box-icon className="iconCart" color="white" name='cart'></box-icon>
            <p className="text">Add to car</p>
        </button>
    )

}

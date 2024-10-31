import React from 'react';
import './CartPopup.css';
import { useCartStore } from "../../GlobalState/CartState/CartState.jsx";
import {returnNavigate} from "../../Helpers/Navigate.js";

export const CartPopup = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const cartOpen = useCartStore((state) => state.cartOpen);
    const removeProduct = useCartStore((state) => state.removeItem);
    const navegation = returnNavigate()


    if (!cartOpen) return null;

    return (
        <div className={`CartPopup ${cartOpen ? 'open' : ''}`}>
            <button onClick={toggleCart} className="closeBtn">Close</button>
            <p>Cart</p>
            {cartItems.length === 0 ? (
                <p>Cart empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.nombre} - {item.quantity} 
                            <button onClick={() => removeProduct(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="CartButtonPayment">
                <button onClick={() => navegation('/Payments')}> Pay </button>
            </div>

        </div>
    );
};

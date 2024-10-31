import React from 'react';
import './TableComponent.css';
import {useCartStore} from "../../GlobalState/CartState/CartState.jsx";

export const TableComponent = () => {
    const itemsCart = useCartStore((state)=> state.cartItems)
    const removeProduct = useCartStore((state)=> state.removeItem)



    return (
        <section className="tableProducts">

            <table className="table">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>

                {itemsCart.map((item)=>(
                    <tr key={item.id}>
                        <th>
                            <img src={item.imagen}/>
                        </th>
                        <td>{item.nombre} </td>
                        <td>{item.quantity}</td>
                        <td>
                            <button onClick={()=> removeProduct(item.id)}>delete</button>
                        </td>
                    </tr>
                ))}

            </table>
        </section>
    );
};



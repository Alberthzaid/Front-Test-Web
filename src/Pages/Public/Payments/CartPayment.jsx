import React from 'react'
import {TableComponent} from "../../../Components/TableComponent/TableComponent.jsx";
import './CartPayment.css'
import {PaymentForm} from "../../../Components/PaymentPopup/PaymentPopup.jsx";

export const CartPayment = () => {
    return (
        <div className="CartPaymentContent">
           <PaymentForm/>
            <TableComponent/>
        </div>
    )
}

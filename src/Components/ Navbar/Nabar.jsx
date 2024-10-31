import React from 'react'
import './Navbar.css'
import {ButtonLogin} from "../Buttons/ButtonLogin/ButtonLogin.jsx";
import 'boxicons'
import {useCartStore} from "../../GlobalState/CartState/CartState.jsx";
import {returnNavigate} from "../../Helpers/Navigate.js";


export const Navbar = () => {
    const toggleCart = useCartStore((state) => state.toggleCart)
    const navegation = returnNavigate()

    const hadleClick = ()=>{
        toggleCart()
    }

    return (
        <div>
            <nav className="Navbar">

                <div  className="title_navbar">
                    <h1 className="title_navbar-title">
                        Technical Test
                    </h1>
                </div>

                <div className="button-container">
                    <button onClick={()=>navegation('/')} className="button">
                        <box-icon color='white' name='home'></box-icon>
                    </button>
                    <button  className="button">
                        <box-icon onClick={()=>navegation('/Products')}  color="white" name='closet'></box-icon>
                    </button>
                    <button className="button">
                    <box-icon color="white"  name='user'></box-icon>
                    </button>

                    <button onClick={hadleClick} className="button">
                        <box-icon color="white" name='cart'></box-icon>
                    </button>
                </div>


                <div className="LoginButton">
                    <ButtonLogin/>
                </div>
            </nav>
        </div>
    )
}

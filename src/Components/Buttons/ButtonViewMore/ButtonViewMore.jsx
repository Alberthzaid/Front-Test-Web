import React from 'react'
import './ButtonViewMore.css'
import {useNavigate} from "react-router-dom";

export const ButtonViewMore = () => {

    const navegation = useNavigate();
    const hadleClick = ()=>{
        navegation('/Products')
    }

    return (
        <div className="ButtonViewMore-Content">
            <button onClick={hadleClick} class="buttonViewMore"> VIEW MORE</button>
        </div>
    )
}

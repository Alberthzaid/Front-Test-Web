import React from 'react'
import './ButtonLogin.css'
import {useNavigate} from "react-router-dom";

export const ButtonLogin = () => {
    const navigate = useNavigate()

    const HadleClick = ()=>{
        navigate('/Login')
    }

    return (
        <>
            <button onClick={HadleClick} className="buttonLogin"> Login</button>
        </>
    )
}

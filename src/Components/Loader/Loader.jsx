import React from 'react'
import './Loader.css'

export const Loader = () => {
    return (
        <div className="loaderContainer">
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}

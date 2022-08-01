import React, {useState} from "react";
import './Imag.css'

export const Imag = ({image, className}) => {

    return (
        <span className={'Imag__container ' + className} >
            <img src={image} alt={''} className={'Imag__img'}/>
        </span>
    )
}
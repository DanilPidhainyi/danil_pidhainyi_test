import React, {useState} from "react";
import './Imag.css'
import {FullImag} from "./FullImag";

export const Imag = ({image, className}) => {

    const [isShowFull, setIsShowFull] = useState(false)

    return (
        <>
            <span className={'Imag__container ' + className} >
                <img src={image} alt={''} className={'Imag__img'}
                     onClick={() => setIsShowFull(true)
                }/>
            </span>
            <FullImag image={image} isShow={isShowFull} setIsShow={setIsShowFull}/>
        </>
    )
}
import React from "react";
import './Fullimag.css';

export const FullImag = ({id, image, isShow, setIsShow}) => {
    return (
        <span  className={isShow ? 'FullImag__container' : 'none'}>
            <div className={'imgContainer'}>
                <img id={id} className={'imgContainer__img'} src={image} alt={''}/>
                <button className={'imgContainer__button'}
                        onClick={() => setIsShow(false)}
                >✕</button>
            </div>
        </span>
    )
}
import React from "react";
import './Fullimag.css';

export const FullImag = ({image, isShow, setIsShow}) => {
    return (
        <span className={isShow ? 'FullImag__container' : 'none'}>
            <div className={'imgContainer'}>
                <img className={'imgContainer__img'} src={image} alt={''}/>
                <button className={'imgContainer__button'}
                        onClick={() => setIsShow(false)}
                >✕</button>
            </div>
        </span>
    )
}
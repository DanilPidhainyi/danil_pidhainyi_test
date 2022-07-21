import React, {useState} from "react";
import Moment from "react-moment";
import './header.css';

export const Header = ({images}) => {

    const [data, setData] = useState(new Date());

    setInterval(() => {
        setData(new Date());
    }, 3000);


    return (
        <span className={'Header'}>
            <h3>Кількість картинок: {Object.keys(images).length}</h3>
             <h3>
                 <Moment format="DD.MM.YYYY HH:mm">
                    {data}
                 </Moment>
             </h3>
        </span>
    )
}


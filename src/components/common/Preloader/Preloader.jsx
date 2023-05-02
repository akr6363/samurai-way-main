import React from 'react';
import preloader from "../../../img/preloader.svg";

export const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='...загрузка'/>
        </div>
    );
};

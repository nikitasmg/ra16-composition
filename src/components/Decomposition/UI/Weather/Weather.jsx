import React from 'react';

/**
 * Принимает объект с погодой
 * @param image {string}
 * @param now {string}
 * @param morning {string}
 * @param evening {string}
 * @returns {JSX.Element}
 * @constructor
 */
const Weather = ({image, now, morning, evening}) => {
    return (
        <div>
            <img src={image}/>
            <span> {now} </span>
            <span> {morning} </span>
            <span> {evening} </span>
        </div>
    );
};

export default Weather;
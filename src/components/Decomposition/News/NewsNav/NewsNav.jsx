import React from 'react';
import NewsNavItem from "../NewsNavItem/NewsNavItem.jsx";

/**
 * @param {string[]} items список элементов для табов
 * @returns {JSX.Element}
 * @constructor
 */
const NewsNav = ({items}) => {
    const today = new Date(Date.now()).toLocaleDateString()
    return (
        <ul>
            {items.map(el => <NewsNavItem key={el} item={el}/>)}
            <span>{today}</span>
        </ul>
    );
};

export default NewsNav;
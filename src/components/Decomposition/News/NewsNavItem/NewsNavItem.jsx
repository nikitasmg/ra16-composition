import React from 'react';

/**
 * @param {string} item название элемента списка
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const NewsNavItem = ({item}) => {
    return (
        <li>
            {item}
        </li>
    );
};

export default NewsNavItem;
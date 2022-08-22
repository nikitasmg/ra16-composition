import React from 'react';

/**
 *
 * @param items {string[]} принимает массив названий
 * @returns {JSX.Element}
 * @constructor
 */
const SearchTabList = ({items}) => {
    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
};

export default SearchTabList;
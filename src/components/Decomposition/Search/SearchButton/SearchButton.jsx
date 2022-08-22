import React from 'react';

/**
 *
 * @param children {JSX.Element}
 * @param params {any[]}
 * @returns {JSX.Element}
 * @constructor
 */
const SearchButton = ({children, params}) => {
    return (
        <button {...params}>
            {children}
        </button>
    );
};

export default SearchButton;
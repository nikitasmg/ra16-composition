import React from 'react';

/**
 *
 * @param children {JSX.Element}
 * @param title {string}
 * @returns {JSX.Element}
 * @constructor
 */
const ThemesItem = ({children, title}) => {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default ThemesItem;
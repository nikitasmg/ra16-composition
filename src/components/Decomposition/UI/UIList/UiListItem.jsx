import React from 'react';

/**
 *
 * @param {string} logo
 * @param {string} title
 * @param {string} link
 * @param {string} subtext
 * @returns {JSX.Element}
 * @constructor
 */
const UiListItem = ({logo, title, link, subtext,}) => {
    return (
        <li>
            <a href={link}>
                {logo && <img width={10} height={10} src={logo} alt={title}/>}
                <span>{title}</span>
                <span>{subtext}</span>
            </a>
        </li>
    );
};

export default UiListItem;
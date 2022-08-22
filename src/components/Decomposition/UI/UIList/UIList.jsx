import React from 'react';
import UiListItem from "./UiListItem.jsx";

/**
 *
 * @param {any[]} items принимает элементы для отрисовки списка
 * @returns {JSX.Element}
 * @constructor
 */
const UIList = ({items}) => {
    return (
        <ul>
            {items.map(el => <UiListItem key={el.title} {...el} />)}
        </ul>
    );
};

export default UIList;
import React from 'react';

/**
 *
 * @param items {{currency: string, value: number, diff: number}[]} список элементов из биржи
 * @returns {JSX.Element}
 * @constructor
 */
const Exchange = ({items}) => {
    return (
        <ul>
            {items.map(item => <span key={JSON.stringify(item)}>{item.currency} {item.value} {item.diff}</span>)}
        </ul>
    );
};

export default Exchange;
import React from 'react';
import {Styled} from "./style.js";


/**
 * @param {string} image image url
 * @param {React.Children} children
 * @returns {JSX.Element}
 * @constructor
 */
//
const Card = ({image, children }) => {
    return (
        <Styled.Card className="card" >
            {image && <Styled.Image src={image} className="card-image" alt={'image'}/>}
            {children}
        </Styled.Card>
    );
};

export default Card;
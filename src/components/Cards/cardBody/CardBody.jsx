import React from 'react';
import {Styled} from "./style.js";

const CardBody = () => {
    return (
        <Styled.Body className="card-body">
            <Styled.Title className="card-title">Card title</Styled.Title>
            <Styled.Text className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</Styled.Text>
            <Styled.Button color={'#ff0000'} href="#" className="btn btn-primary">Go somewhere</Styled.Button>
        </Styled.Body>
    );
};

export default CardBody;
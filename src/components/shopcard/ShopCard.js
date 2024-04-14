
import React from 'react';
import { Card, Button } from "react-bootstrap";
const ShopCard = (props) => {

    const addItem = () => {
        console.log(props.card)
    }

 return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
 <Card>
 <Card.Img variant="top" src={props.card.image} />
 <Card.Body>
 <Card.Title>{props.card.title}</Card.Title>
 <Card.Text>
 <strong>{props.card.description}</strong>
 </Card.Text>
 <Button variant="sucsess" onClick={addItem}>Try it</Button>
 </Card.Body>
 </Card>
 </div>
 );
};
export default ShopCard;
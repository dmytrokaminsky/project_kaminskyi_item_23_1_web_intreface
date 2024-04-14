
import React from 'react';
import { Card, Button } from "react-bootstrap";
const ShopCard = (props) => {
 return (
 <Card>
 <Card.Img variant="top" src={props.card.image} />
 <Card.Body>
 <Card.Title>{props.card.title}</Card.Title>
 <Card.Text>
 {props.card.description}
 </Card.Text>
 <Button variant="outline-secondary">Try it</Button>
 </Card.Body>
 </Card>
 );
};
export default ShopCard;
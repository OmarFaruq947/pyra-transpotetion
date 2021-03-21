import React from 'react';
import { Card, Container,Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './HomeContent.css';

const HomeContent = (props) => {
    const {flag , title,id} =props.trns;
    const history= useHistory()

    const handleOrderNowBtn =() => {
        history.push('/LogIn');
    }

    return (
        <div className="card_div">
        <Container>
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" className="img_siz" src={flag} />
            <Card.Body>
            <Card.Title className=" text ">{title}</Card.Title>
            <Link to={`/Destination/${id}`}>
            <Button variant="primary" className="button"  >Order Now</Button>
            </Link>
           
            </Card.Body>
            </Card>
        </Container>
        </div>
    );
};
export default HomeContent;
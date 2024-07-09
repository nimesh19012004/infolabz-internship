import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";


const CustomCard = ({props}) => {
  console.log(props);
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <div style={{ padding: "10px", backgroundColor: "lightgray" }}>
        <Badge bg="primary">{props.status}</Badge>
      </div>
      <Card.Img
        variant="top"
        src={props.imageURL}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.main1}</ListGroup.Item>
        <ListGroup.Item>{props.main2}</ListGroup.Item>
      </ListGroup>
      <div style={{ backgroundColor: "lightgray" }}>
        <p style={{ fontStyle: "italic", paddingLeft: "15px" }}>
          {props.movieGenre}
        </p>
      </div>
    </Card>
  );
}

export default CustomCard

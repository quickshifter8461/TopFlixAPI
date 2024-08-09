import React from "react";
import Card from "react-bootstrap/Card"

function Movies({ title, image, rating, dateOfRelease }) {
  return (
    <Card className="mb-4 bg-color text-white">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{`Rating : ${rating}`}</Card.Title>
        <Card.Text>{`Release Date : ${dateOfRelease}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Movies;

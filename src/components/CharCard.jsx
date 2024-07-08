import React from "react";
import Button from "react-bootstrap/esm/Button";    
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";    
import { useNavigate } from "react-router-dom";
import AllCharacterPage from "../pages/AllCharacterPage";

function CharCard({ character }) {
    const navigate = useNavigate()

    return (
        <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          Status: {character.status} Species: {character.species}
        </Card.Text>

        {/* <Button variant="primary" onClick={()=>navigate(`/AllCharacterPage/${character.id}`)}>View Details</Button> */}
      </Card.Body>
    </Card>
  );

}

export default CharCard
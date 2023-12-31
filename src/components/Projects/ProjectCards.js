import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsPhone } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        )}
        {"\n"}
        {"\n"}

        {props.appLink && (
          <Button
            variant="primary"
            href={props.appLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsPhone /> &nbsp;
            {"Try Out"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ridham Patel </span>
            from <span className="purple"> Surat, Gujarat, India.</span>
            <br /> I am a software engineer at bacancy technology company which is located in Ahmedabad.
            <br />
            Additionally, I am working as a post maker at 2 hospitals.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "#5b99f5" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ridham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

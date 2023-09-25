import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Ridham Patel </span>
            a Software Engineer based in <span className="purple"> Surat, Gujarat, India.</span>
            <br /> I currently work at Bacancy Technology in Ahmedabad.
            <br />
            Additionally, I also serve as a content creator for two hospitals.
            <br />
            <br />
            Beyond coding, I have a passion for:
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
            "My mission is to create impactful solutions."{" "}
          </p>
          <footer className="blockquote-footer">Ridham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

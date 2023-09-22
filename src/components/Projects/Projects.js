import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobPortal from "../../Assets/Projects/Job_Portal.png";
import RorBank from "../../Assets/Projects/ROR_Bank.png";
import ReactBank from "../../Assets/Projects/React_Bank.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Portal (React + ROR)"
              description="The Job Portal project is built using React for the frontend and Ruby on Rails for the backend. It allows job seekers to view job listings, submit applications, and job creators to post job listings."
              ghLink="https://github.com/Ridham151101/Job_Portal_React_ROR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RorBank}
              isBlog={false}
              title="Banking Management System (ROR)"
              description="The Banking Management System is a web application built with Ruby on Rails 6 that facilitates the management of customer accounts and transactions in a banking setting."
              ghLink="https://github.com/Ridham151101/Banking-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactBank}
              isBlog={false}
              title="Banking Management System (React)"
              description="Welcome to the Banking Management System repository! This project is a web application that simulates a banking system, allowing users to manage accounts, make transactions, and more."
              ghLink="https://github.com/Ridham151101/Banking-Management-System_React"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

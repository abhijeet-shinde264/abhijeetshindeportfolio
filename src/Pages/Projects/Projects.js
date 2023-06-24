import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Eventium from "../../Images/app1.png";
import AnuragUniversity from "../../Images/app2.png";
import DAA from "../../Images/app3.png";
import EditoHolic from "../../Images/app4.png";
import Particle from "../../components/Particle";

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
              imgPath={Eventium}
              isBlog={false}
              title="Eventium"
              description="Eventium is an app which enables faculty to add the events under different clubs and professional 
              chapters so that students can get an idea regarding the events, register to them through this app and can also give their 
              feedback and attendance through this app."
              demoLink="https://play.google.com/store/apps/details?id=com.andro.myappyy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnuragUniversity}
              isBlog={false}
              title="Anurag University"
              description="This app helps you to know about the college and and the different events conducted in the college 
              and the different courses offered by the college and the different clubs and chapters are present in the college."
              demoLink="https://play.google.com/store/apps/details?id=com.auapp.anuraguniversity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DAA}
              isBlog={false}
              title="DAA"
              description="DAA-Design and Analysis of Algorithms is the mobile application designed for students who work on 
              Algorithms. This application helps a student by covering various concepts of DAA subject."
              demoLink="https://play.google.com/store/apps/details?id=com.auapp.daa"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EditoHolic}
              isBlog={false}
              title="EditoHolic- Photo Editor"
              description="Editoholic Just simple and fast touches, you can create artistic high quality works without any professional skills.
              This photo editor offers all the advanced tools as other best pic editing apps and amazing preset photo filters and photo effects to edit photos, enhance images."
              demoLink="https://play.google.com/store/apps/details?id=com.intern.editoholic&hl=en_IN&gl=US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

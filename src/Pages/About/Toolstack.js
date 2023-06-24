import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,SiAndroidstudio,SiPython,SiSalesforce
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSalesforce />
      </Col>
    </Row>
  );
}

export default Toolstack;

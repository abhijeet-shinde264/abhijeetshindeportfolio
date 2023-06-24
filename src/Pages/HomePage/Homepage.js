import { Container,Row,Col } from "react-bootstrap";
import React from "react";
import Particle from "../../components/Particle";
import Type from "./Type";
import homelogo from '../../Images/bg5.png';
import Home2 from "./HommePage2";
//import '../../styles.css';

function Homepage(){
    return(
        <section>
        <Container fluid className="home-section" id="home">
            <Particle/>
            {/*<Particles1/>*/}
            <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ABHIJEET SHINDE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homelogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
    );
}

export default Homepage;
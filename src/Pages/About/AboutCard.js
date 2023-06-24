import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhijeet Shinde </span>
            from <span className="purple"> Hyderabad , India.</span>
            <br />
            <br />
            I am currently employed as a Digital Technology Analyst at
            NTT DATA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing indoor and outdoor Games like UNO, Cricket , Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech videos on YouTube about the new launch of phones.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

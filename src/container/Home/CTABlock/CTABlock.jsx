import React from "react";
import "./CTABlock.css";
import "bootstrap/dist/css/bootstrap.css";

import { Row, Col, Container } from "reactstrap";

const CTABlock = () => {
  return (
    <Container>
      <Row>
        
        <Col className="cta1" md="12" xs="12" lg="6">
          <h1>
            Subscribe for getting offer <br></br>& News Letters
          </h1>
          <h6>
            Dramatically iterate revolutionary infomediaries before <br></br>{" "}
            2.0 customer service
          </h6>
        </Col>
        <Col  className="cta1" md="12" xs="12" lg="6">
          <input
            class="input1"
            style={{ borderRadius: "10px" }}
            placeholder="Enter Email adress"
            type="text"
          ></input>
          <button className="button1">Subscribe</button>
        </Col>
      </Row>
    </Container>
  );
};

export default CTABlock;

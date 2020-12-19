import React from 'react';
import {
    Row,
    Col,
    Container
  } from 'reactstrap';

const Advantages = () => {
    return (
        <div>
            <Container xs="12" style={{marginTop: "100px", marginBottom: "40px", }}>
                <Row style={{textAlign: "center"}}>
                    <Col xs="12" md="6" lg="3">
                        <h4 style={{marginBottom: "30px"}}>Happiness</h4>
                        <p>Free Shipping for any product and it's world wide</p>
                    </Col>
                    <Col xs="12" md="6" lg="3">
                        <h4 style={{marginBottom: "30px"}}>Free Shipping</h4>
                        <p>Free Shipping for any product and it's world wide</p>
                    </Col>
                    <Col xs="12" md="6" lg="3">
                        <h4 style={{marginBottom: "30px"}}>All Trusty Brand</h4>
                        <p>Free Shipping for any product and it's world wide</p>
                    </Col>
                    <Col xs="12" md="6" lg="3">
                        <h4 style={{marginBottom: "30px"}}>24/7 Support Expert</h4>
                        <p>Free Shipping for any product and it's world wide</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Advantages;
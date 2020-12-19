import React, { useState } from 'react';
import './PromoBlock.css';
import img1 from './img/banner-5.jpg';
import img2 from './img/banner-6.jpg';
import img3 from './img/banner-7.jpg';

import {
  Row,
  Col,
  Container,
} from "reactstrap";

import {  Image } from 'react-bootstrap';

const PromoBlock = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12" md="12" lg="6">
          <Image src={img1} fluid />
          <div className="deskBlock1">
            <div className="miniDeskBlock1">
              <h2>Super Saving</h2>
              <h5>MacBook Pro Offer</h5>
            </div>

            <div className="miniDeskBlock2">
              <h5>Browse Collections </h5>
            </div>
          </div>
        </Col>
        <Col sm="12" md="12" lg="6">
          <div className="block2">
          <Image src={img2} fluid />
              <div className="deskBlock2">
                <h2>Up to $150 off</h2>
                  <div>
                    <h6 className="miniDeskBlock3">
                      Competently innovate end-to-end <br></br> relationships through timely <br></br>
                      customer service.
                    </h6>
                  </div>
              </div>
          </div>

          <div className="block3">
             <Image src={img3} fluid />
            <div className="deskBlock3">
              <h2>Up to $150 off</h2>
              <div className="miniDeskBlock5">
                <h6>
                  Competently innovate end-to-end <br></br> relationships through timely <br></br>
                  customer service.{' '}
                </h6>
              </div>
              <div className="miniDeskBlock6">
                <h4>Browse Collections</h4>
              </div>
            </div>
          </div>
         
        </Col>
       
       
      </Row>
    </Container>
  );
};

export default PromoBlock;

{/* <div className="mainBlock">
<Col xs="12" md="12" lg="6"> 
<div className="block1">
  <div className="div-img">
    <img className="img1" src={img1}></img>
  </div>
  <div className="deskBlock1">
    <div className="miniDeskBlock1">
      <h2>Super Saving</h2>
      <h5>MacBook Pro Offer</h5>
    </div>

    <div className="miniDeskBlock2">
      <h5>Browse Collections </h5>
    </div>
  </div>
</div>
</Col>
<Col sm="12" md="12" lg="6" >
  <div className="block2">
    <div>
      <img className="img2" src={img2}></img>
    </div>
    <div className="deskBlock2">
      <h2>Up to $150 off</h2>
      <div>
        <h6 className="miniDeskBlock3">
          Competently innovate end-to-end <br></br> relationships through timely <br></br>
          customer service.
        </h6>
      </div>
      <div className="miniDeskBlock4">
        <h4>Browse Collections </h4>
      </div>
    </div>
  </div>
  <div className="block3">
    <img className="img3" src={img3}></img>
    <div className="deskBlock3">
      <h2>Up to $150 off</h2>
      <div className="miniDeskBlock5">
        <h6>
          Competently innovate end-to-end <br></br> relationships through timely <br></br>
          customer service.{' '}
        </h6>
      </div>
      <div className="miniDeskBlock6">
        <h4>Browse Collections</h4>
      </div>
    </div>
  </div>
</Col>
</div> */}

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import JumbotronTagline from './JumbotronTagline/JumbotronTagline';

import './Jumbotron.css';

import PenroseTriangle from '../../assets/images/landing-pg-penrose-triangle.svg';

// d-flex d-m-flex d-l-flex d-xl-flex d-xxl-flex
// d-flex d-xs-none d-s-none

export default function Jumbotron() {
  return (
    <Container className='jumbotron-container overflow-hidden'>
        <div className='d-flex jumbotron-row-container'>
          <Row className='gx-5'>
              <Col xs={12} md={8} className='mb-4'>
                  <JumbotronTagline/>
              </Col>
              <Col md={4} className='d-none d-md-flex justify-content-center align-items-center'>
                  <div className='jumbotron-img-container'>
                    <Image src={PenroseTriangle} className='jumbotron-img img-fluid'/>
                  </div>
              </Col>
          </Row>
        </div>
    </Container>
  )
}

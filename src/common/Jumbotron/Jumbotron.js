import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import JumbotronTagline from './JumbotronTagline/JumbotronTagline';

import './Jumbotron.css';

import PenroseTriangle from '../../assets/images/landing-pg-penrose-triangle.svg';
import CTAButton from '../CTAButton/CTAButton';

export default function Jumbotron() {
  return (
    <Container className='jumbotron-container'>
        <div className='d-flex jumbotron-row-container'>
          <Row className='gx-5'>
              <Col xs={12} md={8} className=''>
                  <JumbotronTagline/>
              </Col>
              {/* TODO: Make this resize properly / constrain size */}
              <Col md={4} className=''>
                  <div className='d-none d-m-block d-l-block d-xl-block d-xxl-block jumbotron-img-container'>
                    <Image src={PenroseTriangle} className='jumbotron-img img-fluid'/>
                  </div>
              </Col>
          </Row>
        </div>
    </Container>
  )
}

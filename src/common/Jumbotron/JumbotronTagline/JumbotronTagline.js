import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Typewriter from 'typewriter-effect';

import CTAButton from '../../CTAButton/CTAButton';

import './JumbotronTagline.css';

export default function JumbotronTagline() {
  return (
    <Container className='p-3'>
        <Row>
            <Col>
                <div className='jumbotron-tagline-header-container'>
                    <h1 className='jumbotron-tagline-header'>Rajeev Parmasar</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='jumbotron-tagline-typewriter-container'>
                    <h5 className='jumbotron-tagline-pre_typewriter'>I'm passionate about 
                    <Typewriter
                        className='jumbotron-tagline-typewriter'
                        options={{
                            strings: [
                                'data science',
                                'machine learning',
                                'actuarial science',
                                'problem solving',
                                'software engineering'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h5>
                </div>
            </Col>
        </Row>
        <Row className='jumbotron-tagline-cta-btn-container'>
            <Col md={6} className='jumbotron-tagline-cta-btn'>
                <CTAButton outline={true} level='primary' text={'Explore Projects'} button_route='/projects'/>
            </Col>
            <Col md={6}>
                <CTAButton outline={true} level='secondary' text={'View Resume'} button_href='https://drive.google.com/file/d/1Jfb2oK9t-TysY1Sk5zkzS9CUlPGfQs5m/preview' />
            </Col>
        </Row>
    </Container>
  )
}

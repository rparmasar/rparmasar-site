import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ProjectLanding.css';
import Header from '../../../common/Header/Header';
import CTAButton from '../../../common/CTAButton/CTAButton';

import test_img from '../../../assets/images/jumbotron-bgs/roulette-wheel-bg.jpg';

export default function ProjectLanding({bg_img_path=test_img, header_text='Project Name', body_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie efficitur lorem, a tempus leo sollicitudin sit amet.', primary_cta_text='Some CTA Text Here', primary_cta_href='', source_href=''}) {
  return (
    <>
        <style type='text/css'>
            {`
                .pl-container {
                    background-image: 
                    linear-gradient(rgba(13, 10, 10, 0.815), rgba(12, 12, 12, 0.8)),
                        url(${bg_img_path});
                    
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            `}
        </style>
        <Container className='pl-container' fluid>
            <Container>
                <Col md={10} className='pl-content-container d-flex justify-content-center flex-column'>
                    <Row>
                        <Header text={header_text} type='none' className='pl-content-header'/>
                    </Row>
                    <Row>
                        <p>{body_text}</p>
                    </Row>
                    <Row>
                        <div className='pl-cta-btn-container'>
                            <CTAButton level='primary' text={primary_cta_text} button_href={primary_cta_href} className='pl-cta-btn' />
                            <CTAButton outline level='source' text={'View Source'} button_href={source_href}/>
                        </div>
                    </Row>
                </Col>
                <Col md={2} />
            </Container>
        </Container>
    </>
  )
}
// "background-image": `linear-gradient(rgba(39, 37, 37, 0.5), rgba(25, 23, 23, 0.183)), url("/Users/rajeevparmasar/Desktop/projects/rparmasar-site/src/assets/images/jumbotron-bgs/roulette-wheel-bg.jpg");`
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ProjectLanding.css';
import Header from '../../../common/Header/Header';
import CTAButton from '../../../common/CTAButton/CTAButton';

export default function ProjectLanding({bg_img_path, header_text='Project Name', body_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie efficitur lorem, a tempus leo sollicitudin sit amet.', primary_cta=false, secondary_cta={'text': "Explore Source", 'href': ''}}) {
  return (
    <>
        <style type='text/css'>
            {`
                .pl-container {
                    background-image: 
                    linear-gradient(rgba(13, 10, 10, 0.815), rgba(12, 12, 12, 0.8)),
                        url(${process.env.PUBLIC_URL}/${bg_img_path});
                    
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
                            {primary_cta && <CTAButton level='primary' text={primary_cta.text} button_href={primary_cta.href} className='pl-cta-btn' />}
                            {secondary_cta && <CTAButton outline level='source' text={secondary_cta.text} button_href={secondary_cta.href}/>}
                        </div>
                    </Row>
                </Col>
                <Col md={2} />
            </Container>
        </Container>
    </>
  )
}
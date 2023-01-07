import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Section.css';
import Header from '../Header/Header';

import ProjectImagePlaceholder from '../../assets/images/img-card-placeholder.png';
import Placeholder from '../../assets/images/img-card-placeholder.svg';
import CTAButton from '../CTAButton/CTAButton';

export default function Section({header_type, header_text, body_text, body_image, align_items}) {
  return (
    <Container className='section-container'>
        <Row className=''>
            <Col md={7}>
                <div>
                    <Header type='md' text='My Project Name' className='section-body-header-container'/>
                    <div className='section-body-text'>Maecenas consequat lectus in sapien laoreet accumsan. Cras a lacinia eros, ac euismod sapien. Aenean dapibus dui sed augue vestibulum convallis. Praesent est magna, venenatis sed dignissim ac, lobortis eget lorem. Maecenas id pellentesque nisi, sit amet molestie urna. Proin at purus nisi.</div>
                </div>
            </Col>
            <Col md={5}>
                <div className='section-img-container'>
                    <Image className='section-img' src={ProjectImagePlaceholder}/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={7}>

            </Col>
            <Col md={5}>
                <div className='section-built-with-text'>BUILT WITH</div>
            </Col>
        </Row>
        <Row className='section-bottom-row-container'>
            <Col md={7}>
                <div className=''>
                    <CTAButton outline={true} level='primary' text={'View Project'} className='section-body-cta-btn'/>
                    <CTAButton outline={true} level='source' text={'Explore Source'} className='section-body-cta-btn'/>
                </div>
            </Col>
            <Col md={5}>
                <div>
                    <Image className='section-img-card-built-with-icon' src={Placeholder}/>
                    <Image className='section-img-card-built-with-icon' src={Placeholder}/>
                    <Image className='section-img-card-built-with-icon' src={Placeholder}/>
                    <Image className='section-img-card-built-with-icon' src={Placeholder}/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}



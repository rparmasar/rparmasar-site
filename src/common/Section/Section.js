import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Section.css';
import Header from '../Header/Header';

import ProjectImagePlaceholder from '../../assets/images/img-card-placeholder.png';

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
    </Container>
  )
}



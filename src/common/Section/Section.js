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

const SAMPLE_TEXT = 'Maecenas consequat lectus in sapien laoreet accumsan. Cras a lacinia eros, ac euismod sapien. Aenean dapibus dui sed augue vestibulum convallis. Praesent est magna, venenatis sed dignissim ac, lobortis eget lorem. Maecenas id pellentesque nisi, sit amet molestie urna. Proin at purus nisi.';

const PLACEHOLDER_ICONS = [Placeholder, Placeholder, Placeholder, Placeholder];

export default function Section({header_type='md', header_text='Header Name', body_text=SAMPLE_TEXT, body_image=ProjectImagePlaceholder, include_cta_bw=false, icon_list=PLACEHOLDER_ICONS}, className='') {
  return (
    <Container className={className ? `section-container ${className}`: 'section-container'}>
        <Row className=''>
            <Col md={7} lg={8} xl={9}>
                <div>
                    <Header type={header_type} text={header_text} className='section-body-header-container'/>
                    <div className='section-body-text'>{body_text}</div>
                </div>
            </Col>
            <Col md={5} lg={4} xl={3}>
                <div className='section-img-container'>
                    <Image className='section-img' src={body_image}/>
                </div>
            </Col>
        </Row>
        {include_cta_bw &&
            <>
                <Row>
                    <Col md={7} lg={8} xl={9}>

                    </Col>
                    <Col md={5} lg={4} xl={3}>
                        <div className='section-built-with-text'>POWERED BY</div>
                    </Col>
                </Row>
                <Row className='section-bottom-row-container'>
                    <Col md={7} lg={8} xl={9} className='section-body-cta-btn-container'>
                        <div>
                            <CTAButton outline={true} level='primary' text={'View Project'} className='section-body-cta-btn'/>
                            <CTAButton outline={true} level='source' text={'Explore Source'} className='section-body-cta-btn'/>
                        </div>
                    </Col>
                    <Col md={5} lg={4} xl={3}>
                        <div className='section-built-with-icon-container'>
                            {
                                icon_list.map((icon_path, idx) => {
                                    return(<Image key={idx} className='section-built-with-icon' src={icon_path}/>)
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </>
        }
    </Container>
  )
}



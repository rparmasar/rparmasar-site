import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Section.css';
import Header from '../Header/Header';

import Placeholder from '../../assets/images/img-card-placeholder.svg';
import CTAButton from '../CTAButton/CTAButton';
import { Interweave } from 'interweave';

const SAMPLE_TEXT = 'Maecenas consequat lectus in sapien laoreet accumsan. Cras a lacinia eros, ac euismod sapien. Aenean dapibus dui sed augue vestibulum convallis. Praesent est magna, venenatis sed dignissim ac, lobortis eget lorem. Maecenas id pellentesque nisi, sit amet molestie urna. Proin at purus nisi.';

const PLACEHOLDER_ICONS = [Placeholder, Placeholder, Placeholder, Placeholder];

export default function Section({project_id='', header_type='md', header_text='Header Name', body_text=SAMPLE_TEXT, img_name='images/img-card-placeholder.png', img_desc='A Placeholder Image of a white rectangle', source_url, include_cta_bw=false, icon_list=PLACEHOLDER_ICONS, className='', reverse=false, use_static_img=false}) {
  return (
    <Container className={className ? `section-container ${className}`: 'section-container'}>
        <Row className={reverse ? 'd-flex flex-row-reverse align-items-center': 'align-items-center'}>
            <Col md={7} lg={8} xl={9} className='d-flex align-items-center'>
                <div>
                    {header_type === 'none' ? 
                        <div className='section-body-text'>
                            <Interweave content={body_text} />
                        </div>
                    :
                        <>
                            <Header type={header_type} text={header_text} className='section-body-header-container'/>
                            <div className='section-body-text'>
                                <Interweave content={body_text} />
                            </div>
                        </>
                    }
                </div>
            </Col>
            <Col md={5} lg={4} xl={3}>
                <div className='section-img-container'>
                    {use_static_img ?
                        <Image 
                            className='section-img'
                            src={img_name}
                            alt={img_desc}
                        /> :
                        <Image 
                            className='section-img'
                            src={`${process.env.PUBLIC_URL}/${img_name}`}
                            alt={img_desc}
                        />
                    }
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
                            <CTAButton outline={true} level='primary' text={`View ${header_text}`} className='section-body-cta-btn' button_route={header_text} button_state={{"project_id": project_id}}/>
                            <CTAButton outline={true} level='source' text={'Explore Source'} className='section-body-cta-btn' button_href={source_url}/>
                        </div>
                    </Col>
                    <Col md={5} lg={4} xl={3}>
                        <div className='section-built-with-icon-container'>
                            {
                                icon_list.map((icon, idx) => {
                                    return(
                                        <Image 
                                            key={idx}
                                            className='section-built-with-icon'
                                            src={`${process.env.PUBLIC_URL}/${icon.icon_image}`}
                                            alt={icon.name} 
                                        />
                                    )
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



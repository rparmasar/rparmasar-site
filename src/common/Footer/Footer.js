import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';
import CTAButton from '../CTAButton/CTAButton';
import AboutBlankIcon from '../../assets/images/section-icons/about_blank_icon.svg';

export default function Footer() {
  return (
    <Container className='footer-container' fluid>
        <Row xs={1} md={3} className='footer-inner-container justify-content-between'>
            <Col className='mt-5 footer-about-col left-most-col'>
                <h2 className='footer-about-header'>Rajeev Parmasar</h2>
                <p className='footer-about-content mb-auto'>Originally hailing from twin isles Trinidad & Tobago, Rajeev is driven by collaborating with others to think differently to solve problems in creative ways.</p>
                <p className='footer-about-copyright'>© Rajeev Parmasar {new Date().getFullYear()}</p>
            </Col>
            <Col className='mt-5 footer-about-col'>
                <Row className='justify-content-center footer-contact-inner-container'>
                    <h2 className='footer-contact-header'>CONNECT WITH ME</h2>
                    <p className='footer-contact-content'>Want to chat about a project, collaborate, or just say hello?</p>
                    <p className='footer-contact-content'>
                        Email me at <a href = "mailto: rajeev@parmasar.com" className='footer-contact-email-link'>rajeev@parmasar.com</a> or send me a message on LinkedIn.
                    </p>
                    <CTAButton outline={true} level='linkedin' text={'Connect on LinkedIn'} className='footer-contact-cta-btn' button_href='https://www.linkedin.com/in/rajeev-parmasar-b20352187/' />
                </Row>
                <Row className='justify-content-center footer-contact-inner-container'>
                    <h2 className='footer-contact-header'>RESUME</h2>
                    <p className='footer-contact-content'>Interested in seeing my resume?</p>
                    <p className='footer-contact-content'>Download and view a PDF version below.</p>
                    <CTAButton outline={true} level='secondary' text={'Download Resume'} className='footer-contact-cta-btn' button_href='https://drive.google.com/file/d/1M9aJUh0KKPB68UiAlTe0qacxKG-NLvQq/preview'/>
                </Row>
            </Col>
            <Col className='mt-5 footer-about-col'>
                <Row className='justify-content-center footer-contact-inner-container'>
                    <h2 className='footer-contact-header'>MY SOCIALS</h2>
                    <Stack direction='horizontal' gap={2} className='align-items-baseline footer-social-link-container'>
                        <a href='https://www.linkedin.com/in/rajeev-parmasar-b20352187/'
                        className='footer-contact-content'>LinkedIn</a>
                        <Image src={AboutBlankIcon} className='footer-socials-img'/>
                    </Stack>
                    <Stack direction='horizontal' gap={2} className='align-items-baseline footer-social-link-container'>
                        <a href='https://github.com/rparmasar'
                        className='footer-contact-content'>Github</a>
                        <Image src={AboutBlankIcon} className='footer-socials-img'/>
                    </Stack>
                </Row>
                <Row className='justify-content-center footer-contact-inner-container pe-3'>
                    <h2 className='footer-contact-header'>FEEDBACK</h2>
                    <p className='footer-contact-content'>I'd love to get your feedback on the design and overall experience on the site, please email me at <a href = "mailto: rajeev@parmasar.com" className='footer-contact-email-link'>rajeev@parmasar.com</a></p>
                </Row>
                <Row className='justify-content-center footer-contact-inner-container pe-3'>
                    <h2 className='footer-contact-header'>Acknowledgement</h2>
                    <p className='footer-contact-content'>
                        All illustrations created by <a href ="https://www.flaticon.com/authors/parzival-1997" className='footer-contact-email-link'>Parzival’ 1997</a></p>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

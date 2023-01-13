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
            <Col className='mt-5 footer-about-col'>
                <h2 className='footer-about-header'>Rajeev Parmasar</h2>
                <p className='footer-about-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie efficitur lorem, a tempus leo sollicitudin sit amet.</p>
                <p className='footer-about-content'>Quisque sed sem suscipit, malesuada ante eget, suscipit lorem.</p>
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
                    <CTAButton outline={true} level='secondary' text={'Download Resume'} className='footer-contact-cta-btn'/>
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
            </Col>
        </Row>
    </Container>
  )
}

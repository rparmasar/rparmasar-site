import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CTAButton from '../../common/CTAButton/CTAButton';

import Header from '../../common/Header/Header';

import './ResumePage.css';

export default function ResumePage() {
  return (
    <>
      <div>
        <Container className='resume-container'>
          <Row>
            <Header text={'Resume'} type='lg' className='resume-header'/>
          </Row>
        </Container>
      </div>
      <div className='resume-preamble-container'>
        <Container className=''>
          <Row>
            <div className='resume-preamble-text'>
              <p>Here's my resume. Take a look, explore my Github and connect with me on LinkedIn.</p>
              <p>I love meeting new people and learning from them while discussing interesting ideas, especially if we have opposite viewpoints because that's where the conversation really starts.</p>
            </div>
          </Row>
          <Row className='d-flex resume-cta-container'>
            <CTAButton level='prima' text={'Connect on LinkedIn'} className='resume-cta-btn linkedin-btn' button_href='https://www.linkedin.com/in/rajeev-parmasar-b20352187/' />
            <CTAButton level='source' outline text={'Explore my Github'} className='resume-cta-btn' button_href='https://github.com/rparmasar' />
            <CTAButton level='primary' text={'Download Resume'} className='resume-cta-btn ' containerClassname='on-right' button_href='https://drive.google.com/file/d/1Jfb2oK9t-TysY1Sk5zkzS9CUlPGfQs5m/preview' />
          </Row>
        </Container>
      </div>
      <div>
        <Container className='resume-iframe-container'>
          <Row>
            <iframe title='Rajeev Parmasar Resume PDF' className='resume-iframe' src="https://drive.google.com/file/d/1Jfb2oK9t-TysY1Sk5zkzS9CUlPGfQs5m/preview" allow="autoplay"></iframe>
          </Row>
        </Container>
      </div>
    </>
  )
}

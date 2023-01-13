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
            <p className='resume-preamble-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pretium nunc, vel condimentum libero. Morbi sed nisi sed leo suscipit facilisis. Pellentesque feugiat semper sapien, quis tincidunt ipsum consectetur vitae. Donec pharetra est leo, eget iaculis urna porta eu.</p>
          </Row>
          <Row className='d-flex resume-cta-container'>
            <CTAButton level='prima' text={'Connect on LinkedIn'} className='resume-cta-btn linkedin-btn' button_href='https://www.linkedin.com/in/rajeev-parmasar-b20352187/' />
            <CTAButton level='source' outline text={'Explore my Github'} className='resume-cta-btn' button_href='https://github.com/rparmasar' />
            <CTAButton level='primary' text={'Download Resume'} className='resume-cta-btn ' containerClassname='on-right' button_href='https://drive.google.com/file/d/1M9aJUh0KKPB68UiAlTe0qacxKG-NLvQq/preview' />
          </Row>
        </Container>
      </div>
      <div>
        <Container className='resume-iframe-container'>
          <Row>
            <iframe title='Rajeev Parmasar Resume PDF' className='resume-iframe' src="https://drive.google.com/file/d/1M9aJUh0KKPB68UiAlTe0qacxKG-NLvQq/preview" allow="autoplay"></iframe>
          </Row>
        </Container>
      </div>
    </>
  )
}

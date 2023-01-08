import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from '../../common/Header/Header';
import Section from '../../common/Section/Section';

import './AboutMePage.css';

export default function AboutMePage() {
  return (
    <>
      <div>
        <Container className='about-header-container'>
          <Header text={'About Me'} type='lg' className='about-header'/>
        </Container>
      </div>
      <div className='about-preamble-container'>
        <Container>
          <Section header_type='none'/>
        </Container>
      </div>
      <div className='about-content-container'>
        <Container>
          {}
        </Container>
      </div>
    </>
  )
}

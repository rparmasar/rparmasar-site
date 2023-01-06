import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Section.css';
import Header from '../Header/Header';

export default function Section() {
  return (
    <Container className='section-container'>
        <Row>
            <Header type='sm' text='header'/>
            <p>lorem lorem lorem</p>
            <Header type='md' text='header'/>
            <p>lorem lorem lorem</p>
            <Header type='lg' text='header'/>
            <p>lorem lorem lorem</p>
        </Row>
    </Container>
  )
}

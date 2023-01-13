import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

import './LoadingIcon.css';

export default function LoadingIcon() {
  return (
    <Container className='d-flex loading-container'>
        <Spinner animation="grow" variant="light" className='loading-spinner'/>
        <Spinner animation="grow" variant="light" className='loading-spinner'/>
        <Spinner animation="grow" variant="light" className='loading-spinner'/>
    </Container>
  )
}

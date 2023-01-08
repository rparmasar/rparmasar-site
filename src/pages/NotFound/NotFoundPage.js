import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


import './NotFoundPage.css';

import NotFoundSVG from '../../assets/images/page-not-found.svg';
import { useLocation } from 'react-router-dom';

export default function NotFoundPage() {
    const { pathname } = useLocation();

  return (
    <Container className='d-flex not-found-container'>
        <h1 className='not-found-header'>Page not found!</h1>
        <div className='not-found-img-container'>
            <Image src={NotFoundSVG} className='not-found-img' />
        </div>
        <p><strong>Error 404</strong>: The URL you are trying to access, "{pathname}" ,cannot be resolved!</p>
    </Container>
  )
}

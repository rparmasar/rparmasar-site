import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import ProjectImagePlaceholder from '../../../assets/images/img-card-placeholder.png';
import Placeholder from '../../../assets/images/img-card-placeholder.svg';

import './SectionImage.css';

export default function SectionImageCard() {
  return (
    <Container className='section-img-card-container'>
        <div className='section-img-card-img-container'>
            <Image className='section-img-card-img' src={ProjectImagePlaceholder}/>
        </div>
        <div className='section-img-card-built-with-text'>
            BUILT WITH
        </div>
        <div className='d-flex'>
            <Image className='section-img-card-built-with-icon' src={Placeholder}/>
            <Image className='section-img-card-built-with-icon' src={Placeholder}/>
            <Image className='section-img-card-built-with-icon' src={Placeholder}/>
            <Image className='section-img-card-built-with-icon' src={Placeholder}/>
        </div>
    </Container>
  )
}

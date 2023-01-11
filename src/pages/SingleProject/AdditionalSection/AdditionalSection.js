import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Interweave } from 'interweave';

import Header from '../../../common/Header/Header';

import TestImg from '../../../assets/images/img-card-placeholder.png';

import './AdditionalSection.css';

const SAMPLE_HTML = "<p>Cillum aute irure exercitation laborum et. Ullamco irure mollit incididunt laboris eiusmod laborum elit ad ullamco consectetur est. Est in duis laborum consectetur amet consectetur qui aliquip qui nulla non. Consectetur eiusmod et irure pariatur eu labore sint aute est nisi esse eu est. Aliqua officia incididunt id culpa elit exercitation reprehenderit ex anim ut exercitation labore. Id aute est dolore ea ex consectetur in pariatur ipsum.</p>"

export default function AdditionalSection({ header_text='my header', body_html=SAMPLE_HTML}) {
  return (
    <Container className='addsec-container'>
        <Row>
            <Header text={header_text}/>
        </Row>
        <Row className='addsec-content-container'>
            <Interweave content={body_html} />
        </Row>
        <Row>
            <Image
                src={TestImg}
            />
        </Row>
    </Container>
  )
}

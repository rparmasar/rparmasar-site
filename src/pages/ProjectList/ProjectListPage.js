import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Section from '../../common/Section/Section';

import './ProjectListPage.css';
import Header from '../../common/Header/Header';


export default function ProjectListPage() {
    return (
        <Container className='plp-container'>
            <Row className='pt-2'>
                <Header type='lg' text='Projects'/>
            </Row>
            <Row className='pt-2 mb-2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pretium nunc, vel condimentum libero. Morbi sed nisi sed leo suscipit facilisis. Pellentesque feugiat semper sapien, quis tincidunt ipsum consectetur vitae. Donec pharetra est leo, eget iaculis urna porta eu.</p>
            </Row>
            <Row className='pt-2'>
                <Header type='md' text='Explore'/>
            </Row>
            <Row className='pt-2'>
                <Section include_cta_bw/>
                <Section include_cta_bw/>
                <Section include_cta_bw/>
                <Section include_cta_bw/>
            </Row>
        </Container>
    )
}

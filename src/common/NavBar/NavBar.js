import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import CTAButton from '../CTAButton/CTAButton';

import PenroseTriangle from '../../assets/images/landing-pg-penrose-triangle.svg';

import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' sticky="top" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={PenroseTriangle} className='navbar-img'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className="justify-content-end align-items-center">
                <Nav.Link className='navbar-link' href="#home">About Me</Nav.Link>
                <Nav.Link className='navbar-link' href="#features">Projects</Nav.Link>
                <Nav.Link className='navbar-link' href="#pricing">Resume</Nav.Link>
                <CTAButton outline={false} level='primary' text={'Send a Message'} className='navbar-cta-btn'/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

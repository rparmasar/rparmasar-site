import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import CTAButton from '../CTAButton/CTAButton';

import PenroseTriangle from '../../assets/images/landing-pg-penrose-triangle.svg';

import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' sticky="top" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/'>
              <Image src={PenroseTriangle} className='navbar-img'/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className="justify-content-end align-items-center">
                <Nav.Link className='navbar-link'>
                  <Link className='navbar-link' to='/about'>About Me</Link>
                </Nav.Link>
                <Nav.Link className='navbar-link'>
                  <Link className='navbar-link' to='/projects'>Projects</Link>
                </Nav.Link>
                <Nav.Link className='navbar-link' href="#pricing">
                  <Link className='navbar-link' to='/resume'>Resume</Link>
                </Nav.Link>
                <CTAButton outline={false} level='primary' text={'Send a Message'} className='navbar-cta-btn'/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

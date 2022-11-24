import React from 'react'
import styles from './index.module.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
type Props = {
    children?: React.ReactNode
  };


  const Layout = (props : Props)=> {
    return <>
      <div style={{background :'black'}}>
          <header className={styles.header}>
          <Navbar  bg="light" expand='md' >
          <Container fluid>
            <Navbar.Brand href="#"><img src="/assets/qatarLogo.webp" alt="" />  </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              style={{width : '50%'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img src="/assets/qatarLogo.webp" alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className={styles.link} to="/">Home</Link>
                  <Link className={styles.link} to="/fixture">Fixture</Link>
                  <Link  className={styles.link} to="/standings">Standings</Link>
           
                </Nav>
  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
           
          </header>
          <main  style={{background :'black', paddingBottom: '2rem'}}>
          {props.children}
          </main>
      </div>
      </>
    
  }
  
  export default Layout
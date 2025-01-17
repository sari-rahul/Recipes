import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className={`${styles.Navbar} bg-body-tertiary`} >
        <Container className={`w-50`}>        
            <Nav className={styles.NavOuterContainer}>
              <Nav.Link href="/dashboard" className={`${styles.Navlink}`}>Home</Nav.Link>
              <Nav.Link href="/about" className={`${styles.Navlink}`}>About Us</Nav.Link>
              <Nav.Link href="/savedrecipes" className={`${styles.Navlink}`}>Saved Recipes</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

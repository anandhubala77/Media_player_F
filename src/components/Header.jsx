import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'; 

function Header() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand>
          <i className="fa-solid fa-video fa-beat text-warning me-2"></i>
          <span style={{ color: 'white', fontWeight: '700' }}>MEDIA PLAYER</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

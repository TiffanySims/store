import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <Link to='/about' className='footer-links'>
              About
            </Link>
          </Col>
          <Col className='text-center py-3 '>
            <Link to='/faq' className='footer-links'>
              FAQ
            </Link>
          </Col>
          <Col className='text-center py-3 '>
            <Link to='/contact' className='footer-links'>
              Contact
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; 2019</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

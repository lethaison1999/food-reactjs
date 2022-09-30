import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={Logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam facere quo pariatur impedit quas</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title" style={{ fontSize: '16px' }}>
              Delivery Time
            </h5>
            <ListGroup className="deliver__item-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title" style={{ fontSize: '16px' }}>
              Contact
            </h5>
            <ListGroup className="deliver__item-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Address: Trieu Trach, Trieu Phong, Quang Tri </p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0379046120</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: lethaison04011999@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title" style={{ fontSize: '16px' }}>
              Newsletter
            </h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright-text">Copyright - 2022 Website made by Le Thai Son. All Rights Reserved.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Flow: </p>
              <span>
                <Link to="https://www.facebook.com/le.thaison.77">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

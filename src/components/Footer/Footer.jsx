import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
// import logo from "../../assets/images/eco-logo.png";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate reiciendis repellat omnis temporibus! Necessitatibus
              impedit odio veniam optio aspernatur voluptas?
            </p>
          </Col>
          <Col lg="3" className="mb-4" md='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">TopCategories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Smart Watche</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md='3' className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>43, Đà Nẵng, Việt Nam</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i class="ri-phone-line"></i></span>
                  <p>+84 123 456 789</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i class="ri-mail-line"></i></span>
                  <p>3thl@gmail.com</p>
                </ListGroupItem>
            
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

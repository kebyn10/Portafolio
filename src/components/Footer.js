import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logoKebyn.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" />
             */}
             <h1>
              Kebyn
             </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/kebyn-ochoa-dev/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/kebyn10" target="_blank"><img src={navIcon2} alt="" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p></p>
            <p>kebinochoa10@gmail.com   |  +57 3116663501</p>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import perfil from '../assets/img/perfil.jpeg'

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img style={{borderRadius:'50%',widows:'50px'}} className={isVisible ? "animate__animated animate__zoomIn" : ""} src={perfil} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>About Me</h2>
               <div>
               ¡Hola! Soy Kebyn, un entusiasta de la programación, Desarrollador FullStack que inicie mi viaje en el fascinante mundo del código durante mis años de colegio. Cada descubrimiento en este universo me ha cautivado, y mi pasión por la programación sigue creciendo cada día.
Creo firmemente que el mundo de la programación tiene el poder de hacer realidad cualquier idea. Para mí, es más que una profesión: es un medio para lograr lo aparentemente imposible.

Cuando no estoy inmerso en líneas de código, me encuentras en el gimnasio, comiendo algo delicioso o tomando un café Además de mi amor por la programación, soy un aficionado a los videojuegos.
               </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

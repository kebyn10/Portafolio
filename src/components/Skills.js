import meter1 from "../assets/img/nodejs.png";
import meter2 from "../assets/img/javascript2.jpg";
import meter3 from "../assets/img/react2p.png";
import meter4 from "../assets/img/Python-logo.jpg"
import meter5 from "../assets/img/fastapi2.png"
import meter6 from "../assets/img/Portadas_blog_21.png"
import meter7 from "../assets/img/docker.png"
import meter8 from "../assets/img/etiquetas-html.png"
import meter9 from "../assets/img/images.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>¡Bienvenido a mi mundo creativo y profesional! <br></br> A lo largo de mi trayectoria, he cultivado habilidades que me permiten <br></br> abordar desafíos de manera innovadora y ofrecer soluciones impactantes. <br></br> Aquí te presento algunas de mis habilidades clave:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>FastAPI</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
  )
}

import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import logo from '../assets/brand/logo2@4x-8.png';
import { Link } from 'react-router-dom';
import slide1 from '../assets/images/14x.jpg';
import slide2 from '../assets/images/24x.jpg';
import slide3 from '../assets/images/34x.jpg';
import '../assets/dist/css/main.css';




class Index extends Component{
    render(){
        
        return (
            <div>
                <Navbar expand="lg" variant='dark'>
                    <div class="container">
                    <a href="" class="navbar-brand pt-5"><img src={logo} alt="" width="350" height="80" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item" >
                            <div class="underline nav-link-fade-up">
                            <a class="nav-link  active" aria-current="page" href="#" id="inicio">Inicio</a>
                            </div>            
                        </li>
                        <li class="nav-item nav-item-padding-l">
                            <div class="underline nav-link-fade-up">
                            {/* <a class="nav-link  " aria-current="page" href="nosotros.html" id="quienes_somos">¿Quiénes somos?</a> */}
                            <Link className='nav-link' to="/designlab-react/nosotros">¿Quiénes somos?</Link>
                            </div>            
                        </li>
                        <li class="nav-item nav-item-padding-l">
                            <div class="underline nav-link-fade-up">
                            <a class="nav-link " aria-current="page" href="#">Productos y Servicios</a>
                            </div>            
                        </li>
                        <li class="nav-item nav-item-padding-l">            
                            <div class="underline nav-link-fade-up">
                            <a class="nav-link " aria-current="page" href="#">Contacto</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>¡SONRISAS SANAS <br/> Y RESISTENTES!</h5>
                        <p>Nos dedicamos a la fabricación de material odontológico 
                            <br/>de alta caliad, somos especialistas en prótesis fija y 
                            <br/>enfocamos nuestro trabajo en tecnología digital.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h5>LA CALIDAD, <br/> PRINCIPAL OBJETIVO</h5>
                        <p>
                            Nos preocupamos de entregar a nuestros clientes la mejor calidad
                            <br/> en prótesis dentales, tanto fijas como removibles, por esto
                            <br/> contamos con equipos profesionales conformados en cada área de
                            <br/> trabajo y maquinas fresadoras de alta tecnología.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h5>COMUNICACIÓN Y <br/> RESPONSABILIDAD</h5>
                        <p>
                            Es importante para nosotros la buena comunicación con nuestros
                            <br/> clientes y la responsabilidad en la entrega de nuestros productos,
                            <br/> es por esto, que puedes dejarnos tus dudas o consultas en la
                            <br/> sección CONTACTO y te responderemos a la brevedad.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}

export default Index;
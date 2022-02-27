import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useLocation } from 'react-router-dom';
import logo from '../assets/brand/logo_verde_png@2x-8.png';
import '../assets/dist/css/nosotros.css';




class Nosotros extends Component{
    render(){      
        
        
        return(
            <div >
                <Navbar expand="lg" variant='dark'>
                    <div class="container">
                        <a href="" class="navbar-brand pt-5"><img src={logo} alt="" width="350" height="80" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                            <ul class="navbar-nav ms-auto">
                            <li class="nav-item" >
                                <div class="underline-cel nav-link-fade-up">
                                {/* <a class="nav-link  active" aria-current="page" href="index.html" id="inicio">Inicio</a> */}
                                <Link className='nav-link nav-link-grey' to="/designlab-react">Inicio</Link>                            
                                </div>            
                            </li>
                            <li class="nav-item nav-item-padding-l">
                                <div class="underline-cel nav-link-fade-up">
                                {/* <a class="nav-link  " aria-current="page" href="nosotros.html" id="quienes_somos">¿Quiénes somos?</a> */}
                                <Link className='nav-link nav-link-grey' to="/designlab-react/nosotros">¿Quiénes somos?</Link>
                                </div>            
                            </li>
                            <li class="nav-item nav-item-padding-l">
                                <div class="underline-cel nav-link-fade-up">
                                <a class="nav-link nav-link-grey" aria-current="page" href="#">Productos y Servicios</a>
                                </div>            
                            </li>
                            <li class="nav-item nav-item-padding-l">            
                                <div class="underline-cel nav-link-fade-up">
                                <a class="nav-link nav-link-grey" aria-current="page" href="#">Contacto</a>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
                <div class="container">
                    <div className="quienes-somos">
                        <div className="row">
                            <div class="col-md-6 text-center ">
                                <div style={{paddingTop: "50%"}}>
                                    <p className='somos' style={{borderRight:"5px solid #4AAAAF", fontSize:"300%",color:"#A3A3A3"}} >¿QUIÉNES SOMOS <br/> Y QUÉ HACEMOS?</p> 
                                </div>
                            </div>
                            <div class="col-md-6 text-left">
                                <div className='somos-text'>
                                Somos una empresa situada en la ciudad de Valdivia que lleva por nombre Laboratorio Dental DESIGNLAB. Nos dedicamos a la creación de prótesis dentales, entre las cuales se pueden encontrar tanto piezas fijas como removibles. <br/> <br/>
                                Hemos desarrollado trabajos para clientes empresas y particulares que tienen relación con el área odontológica, entre ellos dentistas, clínicas, universidades y hospitales de la Región de Los Ríos.
                                </div>  
                            </div>
                        </div>
                    </div>
                    {/* <div class="quienes-somos">
                    <div class="row ">
                        <div class="col-md-6 text-center ">
                        <div style="padding-top: 30%; ">
                        <p style="border-right: 5px solid #4AAAAF; font-size: 300%;font-family: 'Roboto', sans-serif; color: #A3A3A3;">¿QUIÉNES SOMOS <br/> Y QUÉ HACEMOS?</p>
                        </div>
                        </div>
                        <div class="col-md-6 text-left">
                        <div style="padding-top: 25%; padding-right: 40px; font-size: 120%; padding-left: 20px; color: #4AAAAF;">
                            Somos una empresa situada en la ciudad de Valdivia que lleva por nombre Laboratorio Dental DESIGNLAB. Nos dedicamos a la creación de prótesis dentales, entre las cuales se pueden encontrar tanto piezas fijas como removibles. <br/> <br/>
                            Hemos desarrollado trabajos para clientes empresas y particulares que tienen relación con el área odontológica, entre ellos dentistas, clínicas, universidades y hospitales de la Región de Los Ríos.
                        </div>
                        </div>
                    </div>
                    </div>         */}
                </div> 
            </div>
        );
    }
}

export default Nosotros;
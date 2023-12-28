import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import logo from './assets/logosimpson.png';
import Frase from './components/Frase';
import { useEffect, useState } from 'react';


function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    // peticion get
    // https://thesimpsonsquoteapi.glitch.me/quotes
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato);
    setPersonaje(dato[0]);
  }

  return (
    <>
    <Container className='my-4 text-center'>
      <img src={logo} alt="Logo de los simpsons" className='img-fluid'/>
      <Frase></Frase>
      <Button className='btnFrase'>Obtener frase</Button>
    </Container>
    </>
  )
}

export default App

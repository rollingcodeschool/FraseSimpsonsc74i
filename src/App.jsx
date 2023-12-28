import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import logo from './assets/logosimpson.png';
import Frase from './components/Frase';


function App() {
 
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

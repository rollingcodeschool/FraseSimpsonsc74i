import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container, Spinner } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarFrase, setmostrarFrase] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setmostrarFrase(false);
    // peticion get
    // https://thesimpsonsquoteapi.glitch.me/quotes
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato);
      setPersonaje(dato[0]);
      setmostrarFrase(true);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = mostrarFrase ? (
    <Frase personaje={personaje}></Frase>
  ) : (
    <div>
      <Spinner animation="grow" variant="light" />
    </div>
  );

  return (
    <>
      <Container className="my-4 text-center">
        <img src={logo} alt="Logo de los simpsons" className="img-fluid" />
        {mostrarComponente}
        <Button className="btnFrase" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;

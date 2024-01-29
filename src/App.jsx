import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alerta } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { BaseColaboradores } from "./data/Colaboradores";

function App() {
  const [colab, setColab] = useState(BaseColaboradores);
  const [showAlert, setShowAlert] = useState(false);
  const [filteredColab, setFilteredColab] = useState([]);

  const addColaborador = (newColaborador) => {
    setColab([...colab, newColaborador]);
    setFilteredColab([...colab, newColaborador]);
  };
  const handleValidationResult = (isValid) => {
    setShowAlert({
      show: true,
      isSuccess: isValid,
    });
  };
  const handleSearch = (query) => {
    if (query) {
      const filteredData = colab.filter((colaborador) => {
        return (
          colaborador.nombre.toLowerCase().includes(query.toLowerCase()) ||
          colaborador.correo.toLowerCase().includes(query.toLowerCase()) ||
          colaborador.edad.toString().includes(query) ||
          colaborador.cargo.toLowerCase().includes(query.toLowerCase()) ||
          colaborador.telefono.includes(query)
        );
      });
      setFilteredColab(filteredData);
    } else {
      setFilteredColab(colab);
    }
  };
  useEffect(() => {
    setFilteredColab(colab);
  }, [colab]);
  return (
    <>
      <Container fluid className="main">
        <Row>
          <Col>
            <Formulario
              addColaborador={addColaborador}
              currentLength={colab.length}
              handleValidationResult={handleValidationResult}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Alerta show={showAlert.show} isSuccess={showAlert.isSuccess} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Buscador onSearch={handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Listado colab={filteredColab} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

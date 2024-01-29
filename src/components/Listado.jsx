import { Table } from "react-bootstrap";

export const Listado = ({colab}) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {colab.map((colaborador) => (
            <>
              <tr>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

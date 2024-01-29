import { Alert } from "react-bootstrap";

export const Alerta = ({ show, isSuccess }) => {
  return (
    <>
      {show && (
        <Alert variant={isSuccess ? "success" : "danger"}>
          {isSuccess ? "Ingreso exitoso" : "Debe llenar todos los campos"}
        </Alert>
      )}
    </>
  );
};
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const Formulario = ({
  addColaborador,
  currentLength,
  handleValidationResult,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleAge = (e) => {
    const age = e.target.value;
    setAge(age);
  };
  const handleJob = (e) => {
    const job = e.target.value;
    setJob(job);
  };
  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const handleValidation = () => {
    if (!name || !email || !age || !job || !phone) {
      handleValidationResult(false);
      return false;
    }
    handleValidationResult(true);
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const newId = (currentLength + 1).toString();
      const newColaborador = {
        id: newId,
        nombre: name,
        correo: email,
        edad: age,
        cargo: job,
        telefono: phone,
      };
      addColaborador(newColaborador);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre </Form.Label>
        <Form.Control type="text" onChange={handleName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo </Form.Label>
        <Form.Control
          type="email"
          placeholder="correo@ejemplo.com"
          onChange={handleEmail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Edad </Form.Label>
        <Form.Control type="text" onChange={handleAge} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cargo </Form.Label>
        <Form.Control type="text" onChange={handleJob} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Teléfono </Form.Label>
        <Form.Control type="text" onChange={handlePhone} />
      </Form.Group>
      <Button type="submit">Ingresar</Button>
    </Form>
  );
};

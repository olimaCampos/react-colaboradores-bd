import { useState } from "react";
import { Form } from "react-bootstrap";

export const Buscador = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <Form className="mb-3">
      <Form.Group controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </Form.Group>
    </Form>
  );
};

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contacto () {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo :</Form.Label>
        <Form.Control type="email" placeholder="name@example.cl" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descipcion</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Button variant="danger" type="submit">Enviar</Button>
    </Form>
  );
}

import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Biendenido a <span className="fw-bold">Happy Cake</span></h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src="../img/pastel-de-cumpleanos.png" alt="Happy Cake"/>
    </Container>
  );
};

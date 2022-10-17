import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container className="expand-lg">
          <Navbar.Brand>
            <Link to="/" className="text-white">
              Happy Cake
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

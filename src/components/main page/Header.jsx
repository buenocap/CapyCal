import { Container, Image, Navbar } from "react-bootstrap";
import "./styles/Header.css";

export default function Header() {
  return (
    <header>
      <Navbar className="capy-header">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              alt="application logo"
              src="src/public/static/CapybaraLogo.png"
              width={80}
              height={80}
              roundedCircle
              className="d-inline-block"
            />
            <h2 className="d-inline-block p-2">CapyCal</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

//Contains Footer formatting
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="capy-footer p-4 text-black">
          <Col className="mx-5">
            <Stack>
              <Image
                src="static/CapybaraLogo.png"
                alt="company-logo"
                rounded
                width={100}
                height={100}
              />
              <h4>CapyCal</h4>
              <p>Created By Pedro Bueno</p>
            </Stack>
          </Col>
          <Col>
            {/**Link to alternative pages. Not the current focus but can be implemented in the future */}
            <Nav className="flex-column fs-6 fw-bold">
              Useful Links
              <NavLink href="#" className="text-black footer-nav-link">
                Home
              </NavLink>
              <NavLink href="#" className="text-black footer-nav-link">
                About
              </NavLink>
              <NavLink href="#" className="text-black footer-nav-link">
                How To
              </NavLink>
              <NavLink href="#" className="text-black footer-nav-link">
                Feedback
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

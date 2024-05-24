//Contains the primary view of the calendar and the widgets bar the end user will primarilly interact with.

import { Col, Container, Row } from "react-bootstrap";
import CalendarViewNav from "../calendar views/view nagivation/CalendarViewNav";

export default function ContentView() {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col lg={10}>
          <CalendarViewNav />
        </Col>
        <Col lg={2}>Widgets Bar</Col>
      </Row>
    </Container>
  );
}

import { Tab, Tabs, Image, Container, Stack } from "react-bootstrap";
import MonthlyView from "../monthly calendar component/MonthlyView";

export default function CalendarViewNav() {
  return (
    <Tabs defaultActiveKey={"month"} className="mb-3 justify-content-center">
      <Tab eventKey={"month"} title={"Monthly"}>
        <div className="shadow rounded">
          <MonthlyView />
        </div>
      </Tab>
      <Tab eventKey={"week"} title={"Weekly"}>
        <Container className=" justify-content-center mb-3">
          <Stack>
            <Image
              alt="Capybara with a hardhat"
              src="static/CapyHardHat.png"
              width={300}
              height={300}
              className="m-auto"
            />
            <h1 className="m-auto">Pardon our dust!!</h1>
            <p className="m-auto" style={{ fontStyle: "italic" }}>
              We are currently working on this new feature!
            </p>
          </Stack>
        </Container>
      </Tab>
      <Tab eventKey={"day"} title={"Daily"}>
        <Container className=" justify-content-center mb-3">
          <Stack>
            <Image
              alt="Capybara with a hardhat"
              src="static/CapybaraDust.png"
              width={300}
              height={300}
              className="m-auto"
            />
            <h1 className="m-auto">Pardon our dust!!</h1>
            <p className="m-auto" style={{ fontStyle: "italic" }}>
              We are currently working on this new feature!
            </p>
          </Stack>
        </Container>
      </Tab>
    </Tabs>
  );
}

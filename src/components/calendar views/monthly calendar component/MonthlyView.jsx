import { useState } from "react";
import DayBlock from "./DayBlock";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import uniqid from "uniqid";

export default function MonthlyView() {
  //Initial Variables
  const daysInMonthArray = [];
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;

  //State to allow the user to change the calendar month and year
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  // Calculate the number of days in selected month and year
  const daysInMonth = (year, month) => {
    const num = new Date(year, month, 0).getDate();
    for (let i = 1; i <= num; i++) {
      const d = new Date(`${year}-${month}-${i}`);
      daysInMonthArray.push({
        associatedMonth: d.getMonth() + 1,
        dateID: d.getDate(),
        calendarNumber: i,
        dayInWeek: d.getDay(),
        tasks: [],
      });
    }
  };

  //Arrange the days in set blocks of seven days in order to properly display in the calendar table
  function arrangeCalendar() {
    const blankBoxes = calculateBlankBoxes();
    let tdSet = [[], [], [], [], [], []];
    let finalSet = 0;
    const startingPoint = 7 - blankBoxes.length;

    //Storing inital blank boxes
    for (let i = 0; i < blankBoxes.length; i++) {
      tdSet[0].push(blankBoxes[i]);
    }

    //Completing the first row of the calendar with the remaining day in the week after the blank boxes
    for (let i = 0; i < startingPoint; i++) {
      tdSet[0].push(
        <DayBlock
          day={daysInMonthArray[i].calendarNumber}
          currentDay={currentDay}
          currentMonth={currentMonth}
          selectedMonth={month}
          tasks={daysInMonthArray.tasks}
          key={daysInMonthArray[finalSet].dateID}
        />
      );
      finalSet++;
    }

    //Completing the rest of the rows remaining in the calendar
    for (let i = 1; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        tdSet[i].push(
          <DayBlock
            day={daysInMonthArray[finalSet].calendarNumber}
            currentDay={currentDay}
            currentMonth={currentMonth}
            selectedMonth={month}
            tasks={daysInMonthArray.tasks}
            key={daysInMonthArray[finalSet].dateID}
          />
        );
        //Since the week won't always end with seven days in it, need to track when the last day of the month is reached to completely stop the loop
        finalSet++;
        if (finalSet == daysInMonthArray.length) {
          break;
        }
      }
      if (finalSet == daysInMonthArray.length) {
        break;
      }
    }

    tdSet = tdSet.filter((set) => set.length > 0);

    const trSets = [];

    //tdSets need to be wrapped with a <tr> to correctly be displayed in the table calendar format wanted
    for (let i = 0; i < tdSet.length; i++) {
      trSets.push(<tr key={uniqid()}>{tdSet[i]}</tr>);
    }

    return trSets;
  }

  //Create multiple blank boxes based on the current day the month begins
  function calculateBlankBoxes() {
    const numBlankBoxes = daysInMonthArray[0].dayInWeek;
    const boxes = Array.from({ length: numBlankBoxes }, (_, index) => index);

    return boxes.map((box) => {
      return (
        <td key={uniqid()} height={100} width={150}>
          {box.index}
        </td>
      );
    });
  }

  return (
    <Container fluid className=" mb-3">
      {daysInMonth(year, month)}
      <Row className="justify-content-md-center">
        <Col md={"auto"}>
          <Form className="m-2">
            <label>Month</label>
            <input
              type="number"
              onChange={(e) => setMonth(e.target.value)}
              min={1}
              max={12}
              defaultValue={month}
            />
            <label>Year</label>
            <input
              type="number"
              min={1950}
              max={4000}
              onChange={(e) => setYear(e.target.value)}
              defaultValue={year}
            />
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table responsive={"md"}>
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>{arrangeCalendar()}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

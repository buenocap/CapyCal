import { Button, Form, Offcanvas } from "react-bootstrap";
import "./styles/DayBlock.css";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

export default function DayBlock({
  day,
  currentDay,
  currentMonth,
  selectedMonth,
  currentYear,
  selectedYear,
  tasks,
}) {
  const [taskList, setTaskList] = useState(tasks);
  const [show, setShow] = useState(false);
  const [overLayTitle, setOverLayTitle] = useState("");
  const [includeTime, setIncludeTime] = useState(true);

  function handleClose() {
    setShow(false);
  }

  function handleTime() {
    setIncludeTime(!includeTime);
  }

  function handleShow(e) {
    const dayinWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthInYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(e.dataset.day);
    let month = monthInYear[date.getMonth()];
    let dayOfWeek = dayinWeek[date.getDay()];
    let dayNum = date.getDate();

    setOverLayTitle(`${dayOfWeek}, ${month} ${dayNum}, ${selectedYear}`);
    setShow(true);
  }

  function handleEventSubmission(e) {
    e.preventDefault();
    const { inputTitle, startTime, endTime, eventNote } = e.target;
    setTaskList([
      ...{
        inputTitle: inputTitle?.value,
        startTime: startTime?.value,
        endTime: endTime?.value,
        eventNote: eventNote?.value,
      },
    ]);

    console.log(taskList);
  }

  return (
    <>
      <td
        className={"calendar-day"}
        key={uniqid()}
        data-day={`${selectedYear}-${selectedMonth}-${day}`}
        height={100}
        width={180}
        onClick={(e) => {
          handleShow(e.target);
        }}
      >
        <p
          data-day={`${selectedYear}-${selectedMonth}-${day}`}
          className={` ${
            currentDay == day &&
            selectedMonth == currentMonth &&
            selectedYear == currentYear
              ? "activeDay"
              : ""
          }`}
        >
          {day}
        </p>
      </td>

      {/**Offcanvas, Should make this into its own component */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{overLayTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={(e) => handleEventSubmission(e)}>
            <Form.Label htmlFor="inputTitle">Enter Title</Form.Label>
            <Form.Control type="text" id="inputTitle" className="mb-2" />
            <Form.Check
              type="switch"
              id="timeSwitch"
              label="All Day"
              onChange={handleTime}
              className="mb-1"
            />
            {includeTime && (
              <>
                <Form.Label htmlFor="startTime">Start Time</Form.Label>
                <Form.Control type="time" id="startTime" className="mb-3" />
                <Form.Label htmlFor="endTime">End Time</Form.Label>
                <Form.Control type="time" id="endTime" className="mb-3" />
              </>
            )}

            <Form.Label htmlFor="eventNote">Notes</Form.Label>
            <Form.Control
              as={"textarea"}
              id="eventNote"
              rows={4}
              cols={40}
              className="mb-3"
            />
            <Button variant="primary" type="submit" className="me-2">
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

import { Form, Offcanvas } from "react-bootstrap";
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

  function handleClose() {
    setShow(false);
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

      {/**Offcanvas */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{overLayTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <label className="mb-3">
              Enter title:
              <input
                name="submitted-title"
                autoCapitalize="on"
                type="text"
              ></input>
            </label>
            <label className="mb-3">
              Enter time:
              <input name="submitted-time" type="time"></input>
            </label>
            <label>
              <textarea
                name="event-details"
                rows={4}
                cols={40}
                placeholder="Enter details here"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

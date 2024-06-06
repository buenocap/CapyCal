import { Button, Offcanvas } from "react-bootstrap";
import "./styles/DayBlock.css";
import uniqid from "uniqid";
import { useState } from "react";

export default function DayBlock({
  day,
  currentDay,
  currentMonth,
  selectedMonth,
  tasks,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  const [show, setShow] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <td className={"calendar-day"} key={uniqid()} height={100} width={180}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p
          className={` ${
            currentDay == day && selectedMonth == currentMonth
              ? "activeDay"
              : ""
          }`}
        >
          {day}
        </p>
        {isHovering && (
          <div className="d-grid gap-1">
            <Button
              variant="secondary"
              size="sm"
              className="add-task"
              onClick={handleShow}
            >
              Add Task
            </Button>
          </div>
        )}
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Place holder text.</Offcanvas.Body>
      </Offcanvas>
    </td>
  );
}

import { Badge, Button, Stack } from "react-bootstrap";
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

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }
  return (
    <td
      className={"calendar-day"}
      key={uniqid()}
      height={100}
      width={150}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className={` ${
          currentDay == day && selectedMonth == currentMonth ? "activeDay" : ""
        }`}
      >
        {day}
      </p>
      {isHovering && (
        <div className="d-grid gap-1">
          <Button variant="secondary" size="sm" className="add-task">
            Add Task
          </Button>
        </div>
      )}
    </td>
  );
}

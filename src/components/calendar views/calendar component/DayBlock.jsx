import { Box } from "@chakra-ui/react";
import "./DayBlock.css";

export default function DayBlock({
  day,
  selectedMonth,
  currentMonth,
  currentDay,
}) {
  return (
    <Box bg="white" height="80px" p="5px" m={1}>
      <div className="calendarDay">
        <p
          className={
            currentDay == day && selectedMonth == currentMonth ? "active" : ""
          }
        >
          {day}
        </p>
      </div>
      <div></div>
    </Box>
  );
}

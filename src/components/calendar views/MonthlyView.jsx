import { useState } from "react";
import DayBlock from "./calendar component/DayBlock";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function MonthlyView() {
  //Initial Variables
  const daysInMonthArray = [];
  const date = new Date();
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  //State to allow the user to change the calendar month and year
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  // Calculate the number of days in selected month and year
  const daysInMonth = (year, month) => {
    const num = new Date(year, month, 0).getDate();
    for (let i = 1; i <= num; i++) {
      const d = new Date(`${year}-${month}-${i}`);
      daysInMonthArray.push({
        dayNumber: i,
        dayInWeek: d.getDay(),
        tasks: [],
      });
    }
  };

  function handleMonth(value) {
    if (value < 12 && value >= 0) {
      setMonth(value);
    } else {
      return;
    }
  }

  //Create multiple blank boxes based on the current day the month begins
  function calculateBlankBoxes() {
    const numBlankBoxes = daysInMonthArray[0].dayInWeek;
    const boxes = Array.from({ length: numBlankBoxes }, (_, index) => index);

    return boxes.map((index) => (
      <Box bg="light grey" key={index} rounded="md"></Box>
    ));
  }

  return (
    <div>
      <div className="input-form">
        {/** Allows user to change the month and year displayed --Also used for testing purposes */}
        <form>
          <label>Month</label>
          <input
            onChange={(e) => handleMonth(e.target.value)}
            className="month"
          ></input>
          <label>Year</label>
          <input
            onChange={(e) => setYear(e.target.value)}
            className="year"
          ></input>
        </form>
      </div>
      <div>
        {/** Calculating the days in the selected month */}
        {daysInMonth(year, month)}
        {/** Creating blocks on a simple grid */}
        <SimpleGrid columns={7} spacing={5}>
          {calculateBlankBoxes()}
          {daysInMonthArray.map((day) => {
            return (
              <DayBlock
                day={day.dayNumber}
                dayInWeek={day.dayInWeek}
                key={day.number}
              />
            );
          })}
        </SimpleGrid>
      </div>
    </div>
  );
}

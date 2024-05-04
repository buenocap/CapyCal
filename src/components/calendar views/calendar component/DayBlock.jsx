import { Box } from "@chakra-ui/react";

export default function DayBlock({ day, dayInWeek }) {
  return (
    <Box bg="tomato" height="100%">
      {day}
      <p>Day in week: {dayInWeek}</p>
    </Box>
  );
}

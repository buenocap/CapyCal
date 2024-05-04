import { Box } from "@chakra-ui/react";

export default function DayBlock({ day, dayInWeek }) {
  return (
    <Box bg="white" height="100%" boxShadow="outline" rounded="md">
      {day}
      <p>Day in week: {dayInWeek}</p>
    </Box>
  );
}

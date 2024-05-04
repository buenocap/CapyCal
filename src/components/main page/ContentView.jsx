//Contains the primary view of the calendar and the widgets bar the end user will primarilly interact with.

import MonthlyView from "../calendar views/MonthlyView";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

export default function ContentView() {
  return (
    //Container with box separation with the calendar and widgets bar
    <>
      <Container maxW="container.xl">
        <SimpleGrid columns={2}>
          <Box bg="lightgrey" boxShadow="md" rounded="md" p="3">
            <MonthlyView />
          </Box>
          <Box>
            <p>Widget Menu</p>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}

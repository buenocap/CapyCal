//Contains the primary view of the calendar and the widgets bar the end user will primarilly interact with.

import MonthlyView from "../calendar views/MonthlyView";
import { Grid, GridItem } from "@chakra-ui/react";

export default function ContentView() {
  return (
    //Container with box separation with the calendar and widgets bar
    <>
      <Grid h={"auto"} templateColumns="repeat(5,1fr)" gap={2}>
        <GridItem colSpan={4}>
          <MonthlyView />
        </GridItem>
        <GridItem colSpan={1} bg={"lightcoral"}>
          <p>Widgets</p>
        </GridItem>
      </Grid>
    </>
  );
}

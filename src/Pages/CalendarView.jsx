import React from "react";
import { Box, Typography } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const mockEvents = [
  {
    title: "New Vacancies",
    start: new Date(2025, 3, 15),
    end: new Date(2025, 3, 15),
    status: "Pending",
  },
  {
    title: "Deployment",
    start: new Date(2025, 3, 13),
    end: new Date(2025, 3, 13),
    status: "Pending",
  },
  {
    title: "Validation",
    start: new Date(2025, 3, 14),
    end: new Date(2025, 3, 14),
    status: "Approved",
  },
];

const eventStyleGetter = (event) => {
  let backgroundColor = "#ccc";
  if (event.status === "Pending") backgroundColor = "#f44336";
  if (event.status === "Approved") backgroundColor = "#4caf50";
  if (event.status === "Rejected") backgroundColor = "#9e9e9e";

  return {
    style: {
      backgroundColor,
      borderRadius: "4px",
      color: "white",
      padding: "4px",
    },
  };
};

function CalendarView() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Calendar View
      </Typography>
      <Calendar
        localizer={localizer}
        events={mockEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
      />
    </Box>
  );
}

export default CalendarView;

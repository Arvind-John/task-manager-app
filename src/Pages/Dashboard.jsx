import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const mockTasks = [
  {
    title: "New Vacancies",
    progress: 60,
    deadline: "2025-04-15",
    status: "Pending",
  },
  {
    title: "Deployment",
    progress: 30,
    deadline: "2025-04-13",
    status: "Pending",
  },
  {
    title: "Validation",
    progress: 80,
    deadline: "2025-04-14",
    status: "Approved",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {mockTasks.map((task, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                Deadline: {task.deadline}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Status: {task.status}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={task.progress}
                style={{ marginTop: 8 }}
              />
              <Typography variant="body2" style={{ marginTop: 4 }}>
                {task.progress}% Complete
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Button
          variant="contained"
          onClick={() => navigate("/calendar")}
          style={{ marginRight: 8 }}
        >
          View Calendar
        </Button>
        <Button variant="outlined" onClick={() => navigate("/profile")}>
          View Profile
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;

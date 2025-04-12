import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const mockSubmittedTasks = [
  {
    title: "User Task 1",
    description: "Task submitted by user",
    status: "Pending",
  },
  {
    title: "User Task 2",
    description: "Another pending task",
    status: "Pending",
  },
];

function AdminPanel() {
  const [tasks, setTasks] = useState(mockSubmittedTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [comment, setComment] = useState("");

  const handleOpen = (task) => {
    setSelectedTask(task);
    setComment("");
  };

  const handleClose = () => {
    setSelectedTask(null);
    setComment("");
  };

  const handleDecision = (status) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.title === selectedTask.title ? { ...t, status, comment } : t
      )
    );
    handleClose();
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <Grid container spacing={2}>
        {tasks.map((task, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body2">{task.description}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Status: {task.status}
              </Typography>
              {task.comment && (
                <Typography variant="body2" color="textSecondary">
                  Admin Comment: {task.comment}
                </Typography>
              )}
              {task.status === "Pending" && (
                <Box mt={2}>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={() => handleOpen(task)}
                  >
                    Review
                  </Button>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={Boolean(selectedTask)} onClose={handleClose}>
        <DialogTitle>Review Task</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">{selectedTask?.title}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {selectedTask?.description}
          </Typography>
          <TextField
            label="Admin Comment (optional)"
            fullWidth
            multiline
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDecision("Rejected")} color="error">
            Reject
          </Button>
          <Button
            onClick={() => handleDecision("Approved")}
            variant="contained"
          >
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminPanel;

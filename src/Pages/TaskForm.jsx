import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  LinearProgress,
  Stack,
} from "@mui/material";

function TaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    progress: 0,
    deadline: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted:", formData);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Task
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            label="Progress (%)"
            name="progress"
            type="number"
            inputProps={{ min: 0, max: 100 }}
            value={formData.progress}
            onChange={handleChange}
            required
            fullWidth
          />
          <LinearProgress variant="determinate" value={formData.progress} />
          <TextField
            label="Deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
            fullWidth
          />
          <Button variant="outlined" component="label">
            Upload Photo
            <input type="file" hidden name="photo" onChange={handleChange} />
          </Button>
          {formData.photo && (
            <Typography variant="body2">
              Uploaded: {formData.photo.name}
            </Typography>
          )}
          <Button variant="contained" type="submit">
            Submit Task for Approval
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default TaskForm;

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Avatar,
  Button,
  Paper,
  Grid,
} from "@mui/material";

const mockUser = {
  fullName: "Arvind",
  mobile: "9876543210",
  photo: "https://picsum.photos/seed/picsum/200/300",
  role: "User",
};

function Profile() {
  const [user, setUser] = useState(mockUser);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (field) => (e) => {
    setUser({ ...user, [field]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Paper elevation={3} style={{ padding: 24 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar src={user.photo} sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item>
            <Typography variant="h6">Role: {user.role}</Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <TextField
            label="Full Name"
            value={user.fullName}
            onChange={handleChange("fullName")}
            fullWidth
            margin="normal"
            disabled={!editMode}
          />
          <TextField
            label="Mobile Number"
            value={user.mobile}
            onChange={handleChange("mobile")}
            fullWidth
            margin="normal"
            disabled={!editMode}
          />
        </Box>
        <Box mt={2}>
          {editMode ? (
            <>
              <Button variant="contained" onClick={handleSave} sx={{ mr: 1 }}>
                Save
              </Button>
              <Button variant="outlined" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={() => setEditMode(true)}>
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Profile;

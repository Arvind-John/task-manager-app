import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Calendar", path: "/calendar" },
  { label: "Profile", path: "/profile" },
  { label: "Admin Panel", path: "/admin" },
  { label: "New Task", path: "/task/new" },
];

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color={location.pathname === item.path ? "secondary" : "inherit"}
              sx={{ color: "white", textTransform: "none" }}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={4}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;

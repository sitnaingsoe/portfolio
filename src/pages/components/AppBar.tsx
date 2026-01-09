"use client";

import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skill" },
  { label: "Projects", path: "/project" },
  { label: "Contact", path: "/contact" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar component="nav" sx={{ bgcolor: "#0f172a" }}>
        <Toolbar>
          {/* Mobile menu */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "white", mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            Sit Naing Soe
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.path}
                sx={{ color: "white", ml: 1 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ my: 2, fontWeight: "bold" }}>
            Sit Naing Soe
          </Typography>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={() => setMobileOpen(false)} // ✅ close drawer
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import DrawerAppBar from "./components/AppBar";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
      }}>
      <DrawerAppBar />
      {/* LEFT IMAGE */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: "url('/profile.jpg')", // put image in /public
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: {xs: "20vh", md: "50vh"},
        }}
      />

      {/* RIGHT CONTENT */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#1c1f1e",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          px: {xs: 3, md: 8},
        }}>
        <Box>
          {/* Title */}
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              fontSize: {xs: "2.5rem", md: "4rem"},
              mb: 2,
            }}>
            My
            <br />
            Portfolio
          </Typography>

          {/* Line */}
          <Box
            sx={{
              width: 80,
              height: 2,
              backgroundColor: "#fff",
              mb: 3,
            }}
          />

          {/* Description */}
          <Typography sx={{color: "#ccc", mb: 4, maxWidth: 400}}>
            I am a web developer focused on building clean, responsive, and user-friendly web
            applications.
          </Typography>

          {/* Buttons */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#000",
                "&:hover": {bgcolor: "#e5e7eb"},
              }}>
              Explore Now
            </Button>

            <Button
              variant="outlined"
              component={Link}
              href="/contact"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#e5e7eb",
                  color: "#e5e7eb",
                },
              }}>
              Contact Me
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

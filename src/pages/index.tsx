import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import DrawerAppBar from "./components/AppBar";

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pt: { xs: 8, md: 0 }, // space for AppBar
        }}
      >
        {/* IMAGE SECTION */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: "url('/profile.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#000",
            backgroundSize: { xs: "contain", md: "cover" },
            minHeight: { xs: "45vh", md: "100vh" },
          }}
        />

        {/* CONTENT */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1c1f1e",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box>
            <Typography
              fontWeight={700}
              sx={{
                fontSize: { xs: "2.2rem", md: "4rem" },
                mb: 2,
              }}
            >
              My <br /> Portfolio
            </Typography>

            <Box
              sx={{
                width: 80,
                height: 2,
                backgroundColor: "#fff",
                mb: 3,
                mx: { xs: "auto", md: 0 },
              }}
            />

            <Typography
              sx={{
                color: "#ccc",
                mb: 4,
                maxWidth: 400,
                mx: { xs: "auto", md: 0 },
              }}
            >
              I am a web developer focused on building clean, responsive, and
              user-friendly web applications.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fff",
                  color: "#000",
                  "&:hover": { bgcolor: "#e5e7eb" },
                }}
              >
                Explore Now
              </Button>

              <Button
                variant="outlined"
                component={Link}
                href="/contact"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

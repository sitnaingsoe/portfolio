import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DrawerAppBar from "../components/AppBar";

export default function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
        py: 8,
        px: 2,
      }}>
      <DrawerAppBar />
      <Box sx={{maxWidth: 700, mx: "auto"}}>
        {/* Header */}
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Contact Me
        </Typography>

        <Typography sx={{color: "#555", mb: 3}}>
          Feel free to reach out for collaboration or any questions.
        </Typography>

        <Divider sx={{mb: 4}} />

        {/* Contact Info */}
        <Typography sx={{mb: 3}}>
          📧 Email: <a href="mailto:sitnaingsoe@gmail.com">sitnaingsoe@email.com</a>
        </Typography>

        <Typography sx={{mb: 4}}>
          💻 GitHub:{" "}
          <a href="https://github.com/sitnaingsoe" target="_blank">
            github.com/sitnaingsoe
          </a>
        </Typography>

        {/* Contact Form */}
        <Stack spacing={3}>
          <TextField label="Your Name" fullWidth />
          <TextField label="Your Email" fullWidth />
          <TextField label="Message" multiline rows={4} fullWidth />

          <Button variant="contained" sx={{bgcolor: "#2563eb", width: "fit-content"}}>
            Send Message
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
